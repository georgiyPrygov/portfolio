import React, { forwardRef } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import projectsSelectors from "../../redux/projects/projectsSelectors";
import projectsOperations from "../../redux/projects/projectsOperations";
import "./Header.scss";

const Header = forwardRef(
  (
    { scrollFunctions, mobileMenuOpened, showMobileMenu, hideMobileMenu },
    appRefs
  ) => {
    const location = useLocation().pathname;
    return (
      <header className="App-header">
        <div className="header-content w-container">
          <div className="logo-name">
            <NavLink to="/">GEORGIY PRYGOV</NavLink>
          </div>
          <div className="header-menu">
            <React.Fragment>
              <div onClick={scrollFunctions.scrollToProjects}>Projects</div>
              <div onClick={scrollFunctions.scrollToSkills}>Skills</div>
              <div onClick={scrollFunctions.scrollToContact}>Contact</div>
            </React.Fragment>
          </div>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={showMobileMenu}
          >
            <div className="menu-button_text">MENU</div>
            <div className="w-icon-nav-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </div>
          </button>
          <div
            className={`mobile-menu-wrapper ${
              mobileMenuOpened ? "menu-opened" : ""
            }`}
            onClick={hideMobileMenu}
          >
            <div
              className="mobile-menu-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="close-menu"
                onClick={hideMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              <div className="logo-name">
                <NavLink to="/">GEORGIY PRYGOV</NavLink>
              </div>
              <div className="mobile-menu">
                <div onClick={ () => {scrollFunctions.scrollToProjects(); hideMobileMenu();}}>Projects</div>
                <div onClick={() => {scrollFunctions.scrollToSkills(); hideMobileMenu();}}>Skills</div>
                <div onClick={() => {scrollFunctions.scrollToContact();hideMobileMenu();}}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
);

const mapStateToProps = (state) => ({
  mobileMenuOpened: projectsSelectors.getMobileMenuState(state),
});
const mapDispatchToProps = (dispatch) => ({
  showMobileMenu: () => dispatch(projectsOperations.showMobileMenu(true)),
  hideMobileMenu: () => dispatch(projectsOperations.hideMobileMenu(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
