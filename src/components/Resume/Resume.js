import React from 'react';

function Resume () {
  return (
    <section className='resume'>
      <h1>Resumé</h1>
      <br></br>
      <div className='dl-resume'>
        Download my resumé here:      
        <a href={require('../../assets/files/Resume.pdf')} download='resumé' target='blank'>resumé</a>
      </div>
      <div>
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
      <div>
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Sequelize.js</li>
          <li>API's</li>
          <li>REST</li>
          <li>JSON</li>
          <li>AJAX</li>
          <li>Command Line</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume;