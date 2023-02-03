import React from 'react';

import './Hero.scss';
import Logo from '../../assets/images/logo.png';

const Hero = ({ ref }) => {
  return (
    <section ref={ref} className='hero' id='hero'>
      <figure>
          <img src={Logo} alt="logo" />
      </figure>
      <div></div>
    </section>
  )
}

export default Hero