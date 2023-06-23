import React from 'react';

import './team.css';
import img1 from './photos/debdoot.jpg';
import img2 from './photos/Anupam.jpg';
import img3 from './photos/Asim_photo.jpg';
import img4 from './photos/Aditya.jpg';
import img5 from './photos/Dipayan.jpg';
import mailImg from './download.png';
import linkImg from './Link.png';

const Person = ({ imgSrc, name, designation, college, description, linkedin, mail }) => (
  <div className='person'>
    <img src={imgSrc} alt={name} />
    <div>
      <div className="person-links">
        <a href={linkedin} className="link"><img src={linkImg} /></a>
        <a href={`mailto:${mail}`} className="link"><img src={mailImg} alt="Mail" /></a>
      </div>
      <h3>{name}</h3>
      <h4>{designation}</h4>
      <p>{college}</p>
      <p>{description}</p>
    </div>
  </div>
);

function Team() {
  return (
    <div className='team-sec'>
      <center>
        <h4>TEAM</h4>
        <h1>Our hardworking team</h1>
        <hr style={{ width: '40%', borderTop: '2px solid #ccc' }} />
        <br></br>
      </center>
      <div className='team-members'>
        <Person
          imgSrc={img1}
          name='Dr. Debdoot Sheet'
          designation='Principal Investigator'
          college='Department of Electrical Engineering, Indian Institute of Technology Kharagpur'
          description='Professor of Electrical Engineering'
          linkedin='https://www.linkedin.com/in/debdoot/'
          mail='debdoot@ee.iitkgp.ac.in'
        />
        <Person
          imgSrc={img2}
          name='Anupam Borthakur'
          designation='Contributor'
          college='Centre of Excellence in Artificial Intelligence, Indian Institute of Technology Kharagpur'
          description='Research Scholar'
          linkedin='http://www.linkedin.com/in/anupam-borthakur-b85000185/'
          mail='anupamborthakur@kgpian.iitkgp.ac.in'
        />
        <Person
          imgSrc={img3}
          name='Asim Manna'
          designation='Contributor'
          college='Centre of Excellence in Artificial Intelligence, Indian Institute of Technology Kharagpur'
          description='Research Scholar'
          linkedin='https://www.linkedin.com/in/asimmanna17/'
          mail='asimmanna17@kgpian.iitkgp.ac.in'
        />
        <Person
          imgSrc={img4}
          name='Aditya Kasliwal'
          designation='Contributor'
          college='Manipal Institute of Technology'
          description='Bachelor of Technology'
          linkedin='https://www.linkedin.com/in/aditya-kasliwal-982525227/'
          mail='kasliwaladitya17@gmail.com'
        />
        <Person
          imgSrc={img5}
          name='Dipayan Dewan'
          designation='Contributor'
          college='Centre of Excellence in Artificial Intelligence, Indian Institute of Technology Kharagpur'
          description='Research Scholar'
          linkedin='https://www.linkedin.com/in/dipayan-dewan-aabb8a79/'
          mail='diipayan93@kgpian.iitkgp.ac.in'
        />
      </div>
    </div>
  );
}

export default Team;