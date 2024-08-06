// TeamMembers.js
import React from 'react';
import './team-members.css';

const teamMembers = [
  {
    name: 'Ryan',
    role: 'Fullstack',
    image: '/assets/img/team/david.webp',
    github: 'https://github.com/Panquesito7',
    linkedin: '',
  },
  {
    name: 'James',
    role: 'CAD Modeling',
    image: '/assets/img/team/Nitesh Agnihotri.webp',
    github: 'https://github.com/niteshagnihotri',
    linkedin: 'https://www.linkedin.com/in/niteshagnihotri',
  },
  {
    name: 'Zach',
    role: 'Frontend & Hardware',
    image: '/assets/img/team/Nitesh Agnihotri.webp',
    github: 'https://github.com/niteshagnihotri',
    linkedin: 'https://www.linkedin.com/in/niteshagnihotri',
  },
  {
    name: 'Gautam',
    role: 'Hardware',
    image: '/assets/img/team/Nitesh Agnihotri.webp',
    github: 'https://github.com/niteshagnihotri',
    linkedin: 'https://www.linkedin.com/in/niteshagnihotri',
  },
  // Add more team members here
];

const TeamMembers = () => {
  return (
    <div className="team-members-section">
      <div className="section-header text-center">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="w shape"></div>
      </div>
      <div className="container-fluid">
        <div className="team-members-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="testimonial-item">
              <div className="img-thumb">
                <img src={member.image} alt="Team member" />
              </div>
              <div className="info">
                <h2 className="text_dark">{member.name}</h2>
                <h3>{member.role}</h3>
              </div>
              <div className="media-icons">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
