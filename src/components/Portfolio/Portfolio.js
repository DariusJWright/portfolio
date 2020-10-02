import React from 'react';

function Portfolio() {
  return (
    <section>
      <h1>My Work</h1>
      <div className='flex-row'>
        <div className='img-container'>
          <img src={require('../../assets/images/instartist.PNG')} alt='instartist' className='thumbnail'></img>
          <div className='img-desc'>
            <p>Full stack group project</p>
          </div>
          <div className='img-link'>
            <a href='https://instartist.herokuapp.com/' target='blank'>Instartist</a>
          </div>
          <div className='img-link2'>
            <a href='https://github.com/christopherConcannon/instartist' target='blank'>Github</a>
          </div>
        </div>
        
        <div className='img-container'>
          <img src={require('../../assets/images/weather.png')} alt='weather app' className='thumbnail'></img>
          <div className='img-desc'>
            <p>Front End</p>
          </div>
          <div className='img-link'>
            <a href='https://dariusjwright.github.io/weather-app/' target='blank'>Weather Dashboard</a>
          </div>
          <div className='img-link2'>
            <a href='https://github.com/dariusjwright/weather-app' target='blank'>Github</a>
          </div>          
        </div>

        <div className='img-container'>
          <img src={require('../../assets/images/bored.png')} alt='bored at home' className='thumbnail'></img>
          <div className='img-desc'>
            <p>Front End Group Project</p>
          </div>
          <div className='img-link'>
            <a href='https://josephptflanagan.github.io/project-1/' target='blank'>Bored at Home</a>
          </div>
          <div className='img-link2'>
            <a href='https://github.com/josephptflanagan/project-1' target='blank'>Github</a>
          </div>       
        </div>

        <div className='img-container'>
          <img src={require('../../assets/images/note.png')} alt='note taker' className='thumbnail'></img>
          <div className='img-desc'>
            <p>Front End</p>
          </div>
          <div className='img-link'>
            <a href='https://limitless-citadel-95475.herokuapp.com/notes' target='blank'>Note Taker</a>
          </div>
          <div className='img-link2'>
            <a href='https://github.com/dariusjwright/note-taker' target='blank'>Github</a>
          </div>       
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

