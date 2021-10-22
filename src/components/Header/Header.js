
import React, { forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = forwardRef(({scrollFunctions}, appRefs) => {
  const location = useLocation().pathname;
  return (
    <header className='App-header'>
      <div className='header-content w-container'>
        <div className='logo-name'>
          <NavLink to='/'>GEORGIY PRYGOV</NavLink>
        </div>
        <div className='header-menu'>
          { !location.match(/\d/) &&
                    <React.Fragment>
                      <div onClick={scrollFunctions.scrollToProjects}>Projects</div>
                      <div onClick={scrollFunctions.scrollToSkills}>Skills</div>
                      <div onClick={scrollFunctions.scrollToContact}>Contact</div>
                    </React.Fragment>
          }
        </div>
      </div>
    </header>
  );
})

export default Header;
