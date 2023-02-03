import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import './TopNav.scss';
import {ReactComponent as MainIcon} from '../../assets/icons/header-icon.svg';
import {ReactComponent as DownloadIcon} from '../../assets/icons/download-icon.svg';

const TopNav = () => {

  const [navToggled, setNavToggled] = useState(false)

  const navTogglerHandler = () => setNavToggled(!navToggled);

  return (
    <nav className='top-nav'>
      <div className="container">
        <button className={`nav-toggler ${(navToggled) && 'toggled'}`} onClick={navTogglerHandler}>
          <span></span>
          <span></span>
          <span></span>
          </button>
        <Scrollspy 
          className={(navToggled) && 'toggled'}
          items={ ['hero', 'overview', 'solution', 'results'] } 
          currentClassName="nav-active"
        >
          <li><a href="#hero" onClick={() => setNavToggled(false)}><MainIcon /></a></li>
          <li><a href="#overview" onClick={() => setNavToggled(false)}>Background & Challenge</a></li>
          <li><a href="#solution" onClick={() => setNavToggled(false)}>Solution</a></li>
          <li><a href="#results" onClick={() => setNavToggled(false)}>Results & Effectiveness</a></li>
          <li><a href="#">Slideshow</a></li>
        </Scrollspy>
        <button>
          <DownloadIcon />
          Download Board
        </button>
      </div>
    </nav>
  )
}

export default TopNav