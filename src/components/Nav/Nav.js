import React from 'react';

function Nav() {
  const links = [
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
  ];

  function linkSelected(name) {
    console.log(name);
  }

  return (
    <header className='flex-row'>
      <h2>
        <a href='/'>Darius Wright</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          {links.map((link) => (
            <li key={link.name}>
              <span onClick={() => linkSelected(link.name)}>{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;