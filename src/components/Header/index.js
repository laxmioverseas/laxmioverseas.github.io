import {NavLink} from 'react-router-dom';
import './styles.scss';

const Header = props => {
  return (
    <div className="Header">
      <div className="Header__Logo">
        <NavLink to="/">
          <h1 className="Logo t1">Laxmi Overseas</h1>
        </NavLink>
      </div>

      <nav className="Header__Navigation">
        <div className="Navigation__Link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="Navigation__Link">
          <NavLink to="/about-us">About Us</NavLink>
        </div>
        <div className="Navigation__Link"></div>
        <div className="Navigation__Link"></div>
        <div className="Navigation__Link"></div>
      </nav>
    </div>

  )
}

export default Header;
