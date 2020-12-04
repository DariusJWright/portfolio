import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

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
  const [currentLink, setCurrentLink] = useState(links[0]);

  const renderPage = () => {
    switch (currentLink.name) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />
      case 'Resumé':
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav links={links} currentLink={currentLink} setCurrentLink={setCurrentLink}></Nav>
      <main>
        <div currentLink={currentLink}>{renderPage(currentLink)}</div>
      </main>
      <div className='space'></div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
