import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';

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
      name: 'Resume'
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
    <Router>
      <div>
        <Nav links={links} currentLink={currentLink} setCurrentLink={setCurrentLink}></Nav>
        <main>
          <Switch>
            <Route exact path="/About Me" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Resume" component={Resume} />

            <Route component={NoMatch} />
          </Switch>
          <div currentLink={currentLink}></div>
        </main>
        <div className='space'></div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
