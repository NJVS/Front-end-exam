import Scrollspy from 'react-scrollspy';
import './SideNav.scss';

const SideNav = () => {
  return (
    <nav className='side-nav'>
      <Scrollspy items={['hero', 'overview', 'solution', 'results']} currentClassName="nav-active">
        <li><a href="#hero"></a></li>
        <li><a href="#overview"></a></li>
        <li><a href="#solution"></a></li>
        <li><a href="#results"></a></li>
        <li><a href="#"></a></li>
      </Scrollspy>
    </nav>
  )
}

export default SideNav