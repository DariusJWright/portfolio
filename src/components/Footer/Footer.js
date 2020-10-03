import React from 'react';

function Footer () {
  return (
    <div className='flex-row footer'>
        <a href='https://github.com/DariusJWright' target='blank'>
          <img src={require('../../assets/images/GitHub-Mark.png')} className='footer-link'></img>
        </a>
        <a href='https://www.linkedin.com/in/darius-wright-82948a114/' target='blank'>
          <img src={require('../../assets/images/linkedin.png')} className='footer-link'></img>
        </a>
        <a href='https://stackoverflow.com/users/13408025/darius-wright?tab=profile' target='blank'>
          <img src={require('../../assets/images/stack.png')} className='footer-link'></img>
        </a>
    </div>
  );
}

export default Footer;