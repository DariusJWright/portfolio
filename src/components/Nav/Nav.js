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
    <header>
      <h1 className='title'>
        Darius Wright
      </h1>
      <input type='checkbox' class='nav-toggle' id='nav-toggle'></input>
      <label for='nav-toggle' class='nav-toggle-label'>
        <span></span>
      </label>
      <nav>
        <ul className='flex-row'>
          {links.map((link) => (
            <li>
              <NavLink to={`${link.name}`} activeClassName='nav-link-active' className='nav-link' key={link.name}>
                <span onClick={() => { setCurrentLink(link) }}>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;