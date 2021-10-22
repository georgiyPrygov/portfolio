import React, { Component} from "react";
import { connect } from "react-redux";
import ProjectsList from "../ProjectsList/ProjectsList";
import dataset from "./Dataset";
import "./HomeView.scss";
import projectsOperations from "../../redux/projects/projectsOperations";

class HomeView extends Component {

  state = {
    isActiveTab: "tab-1"
  }

  toggleTabActive = (e) => {
    this.setState({isActiveTab : e.target.id});
  };



  render() {
    const { changeFilter, appRefs, scrollFunctions } = this.props;
    const { isActiveTab } = this.state;
    return (
      <div className="main">
        <div className="section first">
          <div className="w-container">
            <h1 className="main-heading">Hi, I'm a Front End developer</h1>
            <p className="description main">
              I'm focused on building attractive websites and web-apps with
              JavaScript, specifically React.
            </p>
            <div className="centered-button-container">
              <div
                className="blue-btn main"
                onClick={scrollFunctions.scrollToProjects}
              >
                Go to projects
              </div>
            </div>
          </div>
        </div>
        <div className="section" ref={appRefs.skillsRef}>
          <div className="w-container">
            <h2 className="heading-2">
              An eye <br />
              on design
            </h2>
            <div className="w-layout-grid">
              <div className="grid-block_heading-wrap">
                <h5 className="h5_block_subtitle">Personal skills</h5>
              </div>
              <div className="description_wrap_grid">
                <p className="description">
                  My strong side
                  <br /> UI/UX implementation
                </p>
              </div>
              <div className="prize">
                <div className="prize_title">more than</div>
                <div className="prize_number">8</div>
                <div className="prize_title">
                  projects <br />
                  created
                </div>
              </div>
            </div>
            <div className="stack-grid">
              {dataset.technologies.map((technology) => {
                return (
                  <div className="stack-grid-item" key={technology.name}>
                    <img
                      width="60"
                      className="stack-logo"
                      src={technology.image}
                      alt=""
                    />
                    <h5 className="h5_stack_name">{technology.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section" ref={appRefs.projectsRef}>
          <div className="w-container">
            <h2 className="heading-2">My projects</h2>
            <div className="projects-container">
              <div className="projects-menu">
                <p
                  value="business"
                  className={isActiveTab === "tab-1" ? "active" : ""}
                  id="tab-1"
                  onClick={(e) => {
                    this.toggleTabActive(e);
                    changeFilter(e);
                  }}
                >
                  Business website
                </p>
                <p
                  value="e-commerce"
                  className={isActiveTab === "tab-2" ? "active" : ""}
                  id="tab-2"
                  onClick={(e) => {
                    this.toggleTabActive(e);
                    changeFilter(e);
                  }}
                >
                  E-commerce
                </p>
                <p
                  value="web-app"
                  className={isActiveTab === "tab-3" ? "active" : ""}
                  id="tab-3"
                  onClick={(e) => {
                    this.toggleTabActive(e);
                    changeFilter(e);
                  }}
                >
                  Web-app
                </p>
              </div>
              <ProjectsList />
            </div>
          </div>
        </div>
        <div className="section last" ref={appRefs.contactRef}>
          <div className="w-container">
            <div className="request-grid">
              <h2 className="main-heading">
                Keep in touch
              </h2>
              <div className="request-button-container">
                <p className="request_txt">
                  Fill the form
                  <br /> and get a free consultation
                </p>
                <div id="mf-modal-20ef09fd-dd62-4b8a-9f6d-aadab141dc80"> <div className="mf-modal-content"> <div className="mf-modal-body"> <span id="mf-close-20ef09fd-dd62-4b8a-9f6d-aadab141dc80"> <img alt="" width="17" height="17" src="data:image/gif;base64,R0lGODlhEQARAIAAAODn7P///yH5BAEHAAEALAAAAAARABEAAAIqBIKpab3v3EMyVHWtWZluf0za0XFNKDJfCq5i5JpomdUxqKLQVmInqyoAADs="/> </span> <div><div className="mighty-form" id="mf-20ef09fd-dd62-4b8a-9f6d-aadab141dc80"></div> </div> </div> </div> <div id="mf-overlay-20ef09fd-dd62-4b8a-9f6d-aadab141dc80" className="mf-overlay"></div> </div> <button className="blue-btn" id="btn-20ef09fd-dd62-4b8a-9f6d-aadab141dc80" data-submit-close="0"> Fill the form </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filter: state.projects.filter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (e) =>
    dispatch(projectsOperations.changeFilter(e.target.getAttribute("value"))),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
