import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  const [links] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'My Work'
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
            <Route exact path="/" component={Home} />
            <Route exact path="/about me" component={About} />
            <Route exact path="/my work" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
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
