import React from 'react';

function Portfolio() {
  const works = [
    {
      name: 'Instartist',
      desc: 'Full stack group project',
      image: 'instartist',
      link: 'https://instartist.herokuapp.com/',
      github: 'https://github.com/christopherConcannon/instartist'
    },
    {
      name: 'Weather Dashboard',
      desc: 'Front-end',
      image: 'weather',
      link: 'https://dariusjwright.github.io/weather-app/',
      github: 'https://github.com/dariusjwright/weather-app'
    },
    {
      name: 'Bored at Home',
      desc: 'Front-end group project',
      image: 'bored',
      link: 'https://josephptflanagan.github.io/project-1/',
      github: 'https://github.com/josephptflanagan/project-1'
    },
    {
      name: 'Weather PWA',
      desc: 'A simple search by city weather pwa',
      image: 'weather-pwa',
      link: 'https://dw-weather-pwa.netlify.app/',
      github: 'https://github.com/DariusJWright/weather-pwa'
    }
  ]
  return (
    <section className='port'>
      <h2>My Work</h2>
      <div className='port-grid'>
        {works.map(works => (
          <>
            <div className='img-container'>
              <img
                src={require(`../../assets/images/${works.image}.png`)}
                alt={works.name}
                className='thumbnail'
              />

              <div className='img-desc'>
                <p className='img-name'>{works.name}</p>
                <p className='description'>{works.desc}</p>
              </div>

              <div className='img-link'>
                <a href={works.link} target='blank'>
                  <img src={require('../../assets/images/website.png')} alt='link'/>
                </a>
              </div>
              <div className='img-link2'>
                <a href={works.github} target='blank'>
                  <img src={require('../../assets/images/github-icon.png')} alt='github'/>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

