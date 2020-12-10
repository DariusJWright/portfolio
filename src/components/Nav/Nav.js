import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const {
    links = [],
    currentLink,
    setCurrentLink
  } = props

  useEffect(() => {
    document.title = currentLink.name;
  }, [currentLink]);

  return (
    <header className='flex-row'>
      <h1>
        <NavLink to='/'>Darius Wright</NavLink>
      </h1>
      <nav>
        <ul className='flex-row'>
          {links.map((link) => (
            <NavLink to={`${link.name}`} activeClassName='nav-link-active' className='nav-link' key={link.name}>
              <span onClick={() => {setCurrentLink(link)}}>{link.name}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;