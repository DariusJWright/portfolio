import React from 'react';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img className='me' src={require('../../assets/images/me.jpg')}></img>
      <p className='about-text'>I am a full stack web developer based in Tyler, Tx with a background in banking, sales and oil field production. I'm currently looking for a full-time position where I can advance my skillset, and in doing so make myself a better asset for the company. In my free time I enjoy learning and honing my coding skills, hanging out with my family, reading, watching movies and traveling.
      </p>
      
      
    </section>
  );
};

export default About;