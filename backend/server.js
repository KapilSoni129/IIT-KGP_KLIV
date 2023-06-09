const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();

// MySQL configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lkjh0987@#ASDF',
  database: 'KLIV',
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

// Create the multer instance with the storage engine
const upload = multer({ storage });
// Serve static files
app.use('/uploads', express.static('uploads'));

// Middleware
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../white-website/build')));

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
app.post('/api/reviews', upload.single('image'), (req, res) => {
  const { name, designation, comment, stars } = req.body;
  const imagePath = req.file.path; // Get the path of the uploaded image

  // Store the review and image path in the database
  const sql = 'INSERT INTO reviews (name, designation, comment, stars, image) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [name, designation, comment, stars, imagePath], (error, results) => {
    if (error) {
      console.error('Error storing review:', error);
      res.status(500).json({ error: 'Failed to store review' });
    } else {
      res.sendStatus(200);
    }
  });
});


// Endpoint for fetching reviews
app.get('/api/reviews', (req, res) => {
  // Retrieve reviews from the database
  const sql = 'SELECT * FROM reviews';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    } else {
      const reviews = results.map((review) => {
        return {
          name: review.name,
          designation: review.designation,
          comment: review.comment,
          stars: review.stars,
        };
      });
      res.status(200).json(reviews);
    }
  });
});


// Endpoint for updating review display status
app.put('/api/reviews/:id', (req, res) => {
  // Extract review ID and new display status from the request parameters and body
  const { id } = req.params;
  const { displayStatus } = req.body;

  // Update the review display status in the database
  connection.query(
    'UPDATE reviews SET displayStatus = ? WHERE id = ?',
    [displayStatus, id],
    (error, results) => {
      if (error) {
        console.error('Error updating review:', error);
        res.sendStatus(500);
      } else {
        console.log('Review updated successfully');
        res.sendStatus(200);
      }
    }
  );
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../white-website/build', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
