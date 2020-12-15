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
      name: 'Note Taker',
      desc: 'Front-end',
      image: 'note',
      link: 'https://limitless-citadel-95475.herokuapp.com/notes',
      github: 'https://github.com/dariusjwright/note-taker'
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
            </div>

            <div className='img-desc'>
              <p>{works.desc}</p>
            </div>

            <div className='img-link'>
              <a href={works.link} target='blank'>{works.name}</a>
            </div>
            <div className='img-link2'>
              <a href={works.github} target='blank'>Github</a>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

