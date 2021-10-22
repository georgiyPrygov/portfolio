import React, { useState } from "react";
import { connect } from "react-redux";
import projectsSelectors from "../../redux/projects/projectsSelectors";
import Modal from "../Modal/Modal";
import "./ProjectList.scss";
import ProjectDetailsView from "../Project/ProjectDetailsView";

const ProjectsList = ({ projects }) => {


  const [modalState, toggleModal] = useState(false);
  const [modalProjectId, getProjectId] = useState(null);

  const changeModalState = id => {
    toggleModal(prevState => !prevState);
    id ? getProjectId(id) : getProjectId(1);
    const documentHtml = document.documentElement;
    modalState ? documentHtml.style.overflowY = 'auto': documentHtml.style.overflowY = 'hidden';
  }

  const closeModal = () => {
    toggleModal(prevState => !prevState);
    const documentHtml = document.documentElement;
    modalState ? documentHtml.style.overflowY = 'auto': documentHtml.style.overflowY = 'hidden';
  }





  return (
    <div className="projects-grid">
      {projects.map((project) => {
        return (
          <div
            className="project_card"
            style={{ background: project.backgroundColor }}
            key={project.id}
          >
            <div className="project-image-box_agency">
              <img src={project.logoUrl} loading="lazy" alt="" />
            </div>
            <div className="project-autor-block_agency">
              <h5 className="project-name_agency">{project.name}</h5>
              <div className="project-autor-info_agency">
                {project.shortDescr}
              </div>
            </div>
            <div id={project.id} onClick={(e) => changeModalState(e.target.id)} className="project-link-block">
            </div>
          </div>
        );
      })}
      {modalState && (
        <Modal closeModal={closeModal}>
          <ProjectDetailsView chosenId={modalProjectId}/>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: projectsSelectors.getProjects(state),
});

export default connect(mapStateToProps, null)(ProjectsList);
