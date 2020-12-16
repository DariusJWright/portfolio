import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import About from '../About/About';


function Home() {
  return (
    <div classname='home'>
      <h1 className='welcome'>WELCOME TO MY PORTFOLIO!</h1>
      <div className='animation'>
      <div className='animation2'></div>
      </div>
      
    </div>
  )
}

export default Home;