import React from 'react';
import './team.css';

const Person = ({ imgSrc, name, designation, college, description, github, linkedin, mail }) => (
  <div className='person'>
    <img src={imgSrc} alt={name} />
    <div>
      <div className="person-links">
        <a href={github} className="link"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" /></a>
        <a href={linkedin} className="link"><img src="data:image/png;base64,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" /></a>
        <a href={`mailto:${mail}`} className="link"><img src="data:image/png;base64,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" alt="Mail" /></a>
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
          imgSrc='https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg'
          name='Dr. Debdoot Sheet'
          designation='Principal Investigator'
          college='Department of Electrical Engineering, Indian Institute of Technology Kharagpur'
          description='Professor of Electrical Engineering'
          github='https://github.com/debdoot-sheet'
          linkedin='https://linkedin.com/in/debdoot-sheet'
          mail='debdoot@ee.iitkgp.ac.in'
        />
        <Person
          imgSrc='https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg'
          name='Anupam Borthakur'
          designation='Contributor'
          college='Centre of Excellence in Artificial Intelligence, Indian Institute of Technology Kharagpur'
          description='Research Scholar'
          github='https://github.com/anupamborthakur'
          linkedin='https://linkedin.com/in/anupamborthakur'
          mail='anupamborthakur@kgpian.iitkgp.ac.in'
        />
        <Person
          imgSrc='https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg'
          name='Asim Manna'
          designation='Contributor'
          college='Centre of Excellence in Artificial Intelligence, Indian Institute of Technology Kharagpur'
          description='Research Scholar'
          github='https://github.com/asimmanna17'
          linkedin='https://linkedin.com/in/asimmanna17'
          mail='asimmanna17@kgpian.iitkgp.ac.in'
        />
      </div>
    </div>
  );
}

export default Team;