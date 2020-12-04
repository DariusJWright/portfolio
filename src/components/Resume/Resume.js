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
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        </div>
      <div>
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Express</li>
          <li>API's</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume;