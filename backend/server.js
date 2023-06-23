import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser"
import path from "path"
import multer from "multer"
import cors from "cors"
import { fileSizeFormatter, upload } from "./utils/fileUpload.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cloudinary from "./utils/cloudinary.js";

import dotenv from  "dotenv";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MySQL configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.BACKEND_PASSWORD,
  database: process.env.BACKEND_DATABASE,
});


// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for storing images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Generate a unique filename for the image
  },
});

// Create the multer instance with the storage engine// Serve static files
app.use('/uploads', express.static('uploads'));

// Middleware
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontende/build')));
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Handle MySQL connection errors
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1); // Terminate the application
  } else {
    console.log('Connected to MySQL database');
  }
});

// Endpoint for receiving reviews
app.post('/api/reviews', upload.single("image"), async (req, res) => {
  const { name, designation, comment, stars } = req.body;

  // Set initial confirmation status to false
  const confirmed = false;

  let fileData = {};

  if (req.file) {
    let uploadFile = {}; // Initialize uploadFile with an empty object
    try {
      uploadFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "MySQL Website",
        resource_type: "image",
      });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Failed to load image' });
    }

    fileData = {
      fileName: req.file.originalname,
      filepath: uploadFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  const imagePath = fileData.filepath;

  const sql = 'INSERT INTO reviews (name, designation, comment, stars, image, confirmed) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [name, designation, comment, stars, imagePath, confirmed], (error, results) => {
    if (error) {
      console.error('Error storing review:', error);
      return res.status(500).json({ error: 'Failed to store review' });
    }
    // No need for an else block here

    // Send success response
    return res.sendStatus(200);
  });
});



app.get('/api/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    } else {
      const reviews = results.map((review) => {
        return {
          id: review.id,
          name: review.name,
          designation: review.designation,
          comment: review.comment,
          stars: review.stars,
          image: review.image,
          confirmed: review.confirmed,
        };
      });
      res.status(200).json(reviews);
    }
  });
});

// Endpoint for updating review confirmation status
app.put('/api/reviews/:id', (req, res) => {
  // Extract review ID and new confirmation status from the request parameters and body
  const { id } = req.params;
  const { confirmed } = req.body;

  // Update the review confirmation status in the database
  connection.query(
    'UPDATE reviews SET confirmed = ? WHERE id = ?',
    [confirmed, id],
    (error, results) => {
      if (error) {
        console.error('Error updating review:', error);
        res.sendStatus(500);
      } else {
        console.log('Review confirmation status updated successfully');
        res.sendStatus(200);
      }
    }
  );
});

// Endpoint for updating review confirmation status
app.put('/api/reviews/:id/confirm', (req, res) => {
  // Extract review ID and current confirmation status from the request parameters and body
  const { id } = req.params;
  const { confirmed } = req.body;

  // Calculate the new confirmation status as the opposite of the current status
  console.log(confirmed);
  const newConfirmationStatus = (confirmed === 0) ? 1 : 0;
  console.log(newConfirmationStatus);

  // Update the review confirmation status in the database
  connection.query(
    'UPDATE reviews SET confirmed = ? WHERE id = ?',
    [newConfirmationStatus, id],
    (error, results) => {
      if (error) {
        console.error('Error updating review confirmation status:', error);
        res.sendStatus(500);
      } else {
        console.log('Review confirmation status updated successfully');
        res.sendStatus(200);
      }
    }
  );
});


// Endpoint for deleting a review
app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;

  // Check if the ID is undefined
  if (id === undefined) {
    return res.status(400).json({ error: 'Invalid review ID' });
  }

  // Delete the review from the database
  const sql = 'DELETE FROM reviews WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error('Error deleting review:', error);
      res.sendStatus(500);
    } else {
      console.log('Review deleted successfully');
      res.sendStatus(200);
    }
  });
});

app.get('/api/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews WHERE confirmed = true';
  // Rest of the code...
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});