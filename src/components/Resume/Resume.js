import React from 'react';

function Resume () {
  return (
    <div className='resume'>
      <h2>Resume</h2>
      <div className='dl-resume'>
        <p>Download my resume here:</p>      
        <a href={require('../../assets/files/Resume.pdf')} download='resumé' target='blank'>resume.pdf</a>
      </div>
      <div className='front-end'>
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Media Queries</li>
          <li>Bootstrap</li>
          <li>Handlebars.js</li>
          <li>React.js</li>
          <li>React Redux</li>
          <li>Test Writing</li>
        </ul>
        </div>
      <div className='back-end'>
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>Sequelize.js</li>
          <li>API's</li>
          <li>REST</li>
          <li>JSON</li>
          <li>AJAX</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;