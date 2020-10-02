import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [links] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resumé'
    }
  ]);

  return (
    <div>
      <Nav links={links}></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
