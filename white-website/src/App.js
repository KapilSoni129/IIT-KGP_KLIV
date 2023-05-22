  import React from 'react';

  import './App.css';
  import Navigation from './shared/Navigation/components/Navigation';
  import Footer from './shared/Footer/components/footer';

  const Person = ({ imgSrc, name, designation, about }) => (
    <div className='person'>
      <img src={imgSrc} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{designation}</p>
        <p>{about}</p>
      </div>
    </div>
  );

  const Service = ({ logoSrc, title, description }) => (
    <div className="service">
      <img src={logoSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
  

  function App() {
    return (
      <div className="App">
        {Navigation()}
        <main>
          <div className="content-container">
            <section id="home-section">
            <br></br><br></br><br></br>
            <div className="content-left">
              <h1>The future is federated.</h1>
              <p>We help devlopers solve the world's most important prolems by unlocking the value from sensitive data, without increasing the risk.</p>
              <button className = "card-button"> Get started</button>
              </div>
              <div className="right-content">
              <img src="https://speechlogger.com/assets/img/hero-img.png" alt="Hero" />
            </div>
            </section>
            <section id="about-section">
            <br></br><br></br><br></br>
            <div className="content-left-about">
              <h4>WHO ARE WE</h4>
              <h1>About Us</h1>
              <p>This is the content of the About section.</p>
            </div>
            <div className="right-content-about">
              <img className = 'shrink-image' src="https://library.wu.ac.th/km/wp-content/uploads/sites/9/2022/06/fbe8e46f21.jpg" alt="Hero" />
            </div>
            </section>
            <section id="services-section">
            <br></br><br></br><br></br>
            <center>
              <h4>SERVICES</h4>
              <h1>Heading</h1>
              <p>This is the content of the Services section.</p>
            </center>
            <div className="services-container">
              <Service
                logoSrc="https://w7.pngwing.com/pngs/573/699/png-transparent-car-maintenance-vac-shack-advertising-automobile-repair-shop-rebuild-service-logo-car.png"
                title="Service 1"
                description="Description of Service 1"
              />
              <Service
                logoSrc="https://w7.pngwing.com/pngs/573/699/png-transparent-car-maintenance-vac-shack-advertising-automobile-repair-shop-rebuild-service-logo-car.png"
                title="Service 2"
                description="Description of Service 2"
              />
              <Service
                logoSrc="https://w7.pngwing.com/pngs/573/699/png-transparent-car-maintenance-vac-shack-advertising-automobile-repair-shop-rebuild-service-logo-car.png"
                title="Service 3"
                description="Description of Service 3"
              />
            </div>
            </section>
            <section id="team-section">
            <br></br><br></br><br></br>
              <center><h4>TEAM</h4>
              <h1>Our hard working team</h1></center>
              <div className='team-members'>
                <Person 
                  imgSrc='https://www.dobell.co.uk/media/wysiwyg/homepage/Suits-Homepage-2column_2.jpg'
                  name = 'Walter White'
                  designation = 'Chioef Executive Officer'
                  about = 'About 1'
                />
                <Person 
                  imgSrc='data:image/jpeg;base64,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'
                  name = 'Sarah Johnson'
                  designation = 'Product Manager'
                  about = 'About 2'
                />
                <Person 
                  imgSrc='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/rhxs6ya0wmrcyc0e0gki'
                  name = 'William Anderson'
                  designation = 'CTO'
                  about = 'About 3'
                />
                <Person 
                  imgSrc='data:image/jpeg;base64,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'
                  name = 'Amanda Jepson'
                  designation = 'Accountant'
                  about = 'About 4'
                />
              </div>
            </section>
            <section id="contact-section">
      <br></br><br></br><br></br>
        <center><div><h4>CONTACT</h4></div><div ><h1>Contact Us</h1></div></center>
        <div className="contact-container">
          <div className="contact-details">
            <p>Address: 123 Main Street, City, Country</p>
            <p>Call Us: +1 234 567 890</p>
            <p>Email Us: info@example.com</p>
            <p>Open Hours: Mon-Fri, 9am-5pm</p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" id="subject" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea id="message" rows="5" placeholder="Message"></textarea>
              </div>
              <button className="card-button">Send Message</button>
            </form>
          </div>
        </div>
      </section><center>
        <br></br><br></br>
      <h3>Our Newsletter</h3>
              <p>Content for Newsletter.</p>
              <button className = "card-button"> Subscribe </button>
              <br></br><br></br>
      </center>
            
          </div>
        </main>
        {Footer()}
      </div>
    );
  }

  export default App;
