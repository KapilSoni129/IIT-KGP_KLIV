import React from 'react';

import './contact.css';

function Contact() {
    return (
    <div>
        <center>
            <div><h4>CONTACT</h4></div>
            <div ><h1>Contact Us</h1></div>
            <hr style={{ width: '40%', borderTop: '2px solid #ccc' }} />
        </center>
        <div className="contact-card">
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21081.92621577586!2d87.28761773871177!3d22.312537992978694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%20Kharagpur!5e0!3m2!1sen!2sin!4v1686035753384!5m2!1sen!2sin" 
                    frameBorder="0"
                    allowFullScreen
                    title="Map"
                ></iframe>
            </div>
            <div className="contact-form">
                    <div className="contact-details">
                        <div className="contact-info-card">
                            <img src="https://static.vecteezy.com/system/resources/previews/005/043/127/original/a-phone-icon-in-a-round-circle-free-vector.jpg" alt="Phone" />
                            <div className="contact-info">
                            <p>Call Us: </p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <img src="data:image/png;base64,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" alt="Location" />
                            <div className="contact-info">
                            <p>Address: IIT Kharagpur, West Bengal, India </p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACZmZnS0tI7OztQUFD7+/v4+Pjx8fH09PRGRkYnJyednZ0vLy9VVVVNTU3p6ekiIiLGxsbAwMCjo6Pf398TExOHh4d2dnY2NjZqamplZWVbW1ssLCzOzs6srKwPDw8aGhp+fn5AQEC1tbWLi4sVfVu2AAAEdUlEQVR4nO3caVfqMBSF4VQQVBBUHFEEp///F5UFanZ6khZozsli7ffbhV7SR+hAB5xjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjB1ty5Nyus0ivKjK6TKL8NSa5dWnkEIKzaOQQgq3zXpa3d3aCKvzLOMI3Rm9h1V1lmWgWjWg4nKoQqwDNdc0CkQBqClcZV8WJaDq1iI3UQRmF774g90Ps4y2TQZmF7qJP9pbRiICH1ZqQvzEvg2yjOdC4KPTew+dm/pDX2cihkBVIR61yUO8CoG6QiSOMhDrQGUhEhedDycAtYXuw5+Fro/vIXC+eVBb6Pr+TDx1OpgI1BfmI8pAA6F78meku2EjQAuhu8xBRODz/xMWQiR+dDJQFGgjdAt/di46GOcsCjQSDkbdEhNAI6EbXHdJROALPmkkDIjTgwZJAs2Ebvjmz9bpAWOkgXbCgDjZe4gGoKHQDe+7IDYBLYVuuGqYuRYhUPozWQrdedPfvzF8BfFzYCoMZvBZnCZVC6CxMLmpbg6BkfWxsfAg4jksx7ENjrUwIM5jkwnhiiq602Au3JuIG5v4XpG9UDx81BwCE3u2BQj3IuIeUWrXvQThHsT2wDKEAfG98WUH7YGFCHck4levhsMghQiDEypp4k7AYoThWb/ElLsByxG2JuIxnubZLkcYEL8iU+0KLEno3lsQEdjmVQsSnlSYSFzgNC22neUIx1XYSX2iy3CaZmIxwvBKQpFYA7bYPShFuBSAVTXGiQRgesOyrhChDAyIIjC+1t1WhvAzAqwq71aep9g0wvLqVYQQgbjK+X0XB3hitT2xBOEMZvfGvcK/pzeDnz1zXBGNgt2DceLVCxAicPbzyE2Vbn0lDhIT96XZC5EzEx4L21xN1YPHltHXNxci5lN8VAK2JloLcZn7/HscP7oSMP5/MWNh/H2IEf0L/pA4k4ewFaY+aDLxGi69lZbhMFNhen2I/E3h+alwQyNkKWzapg0eQ2B9WcOdBYloKESguF9y5X8pXoirSyS+1iewE7YAruuN59N+f/K+vIpMgDvtvdrzZkI8Qtrw/SBZA9FKiMCm73jpcJ/1LnjWSLjrYfx0+G0kINoI8ZzhocDwIBYSTYQIbHvGMNUXvCKslCyEeIFBF8AU0UCI5993OXOf6iFG1Bfi6endr6GJhUfM/+/iVBfi2dvugM7hPt4fUVuIp8b2u5YtFhJ/7+LUFsKJlf0vuZSb+y++2n7PUhbCQd1DLpuVe/ZffnsXp64Qjnl2cY1+GBA3hwNUhXAcNwfQObjdeLR+RFMI963lGS+4F3d9/5+iEO497PauNb9pMIyeEEbO88tim+Av2dcTwgLS/d2jfrA0TNTuVvfLcQewX18cVVGY60b1/8RTjXrCnL+n8NtCGFdNuFIAhpfd6Ap1fkYJ9/A1hfl/m2ZbnXh0v/VVOwXJ32ujkEL7KKSQQvvyCI//97yP/zfZGWOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGNF9A1fEj7ijyG8cgAAAABJRU5ErkJggg==" alt="Email" />
                            <div className="contact-info">
                            <p>Email Us: fedra.team@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form id="contact" action="" method="post">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Name" autoComplete="on" required />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" id="subject" placeholder="Subject" autoComplete="on" />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            required=""
                        ></textarea>
                    </div>
                <div className="form-group">
                    <button type="submit" id="form-submit" className="card-button">
                        Send Message Now
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;