import {NavLink} from 'react-router-dom';
import { PAGES } from './../../../utils/constants';
import './styles.scss';
import Logo from './logo.png';

const Header = props => {
  return (
    <div className="Header container">
      <div className="Header__Logo">
        <NavLink to="/">
          <h1 className="Logo t1">
            <img src={Logo} alt="Laxmi Overseas" />
            <span>Laxmi Overseas</span>
          </h1>
        </NavLink>
      </div>

      <nav className="Header__Navigation">
        <div className="Navigation__Link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="Navigation__Link">
          <NavLink to={`/${PAGES.ABOUT_US}`}>About Us</NavLink>
        </div>
        <div className="Navigation__Link">
          <NavLink to={`/${PAGES.CONTACT_US}`}>Contact Us</NavLink>
        </div>
        <div className="Navigation__Link"></div>
        <div className="Navigation__Link"></div>
      </nav>
    </div>
  )
}

export default Header;
