import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className='App-header'>
      <div className='header-content w-container'>
        <div className='logo-name'>
          <NavLink to='/'>GEORGIY PRYGOV</NavLink>
        </div>
        <div className='header-menu'>
          <a href='#projects'>Projects</a>
          <Link to='#services'>Services</Link>
          <Link to='#skills'>Skills</Link>
          <Link to='#contact'>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
