import React, { useEffect } from 'react';

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
      <h2>
        <a href='/'>Darius Wright</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          {links.map((link) => (
            <li className={`nav-link ${currentLink.name === link.name && 'nav-link-active'}`} key={link.name}>
              <span onClick={() => {setCurrentLink(link)}}>{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;