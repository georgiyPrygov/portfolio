import { connect } from "react-redux";
import { Link } from "react-router-dom";
import projectsSelectors from "../../redux/projects/projectsSelectors";
import './ProjectList.scss';

const ProjectsList = ({ projects }) => {
  return (
    <div className='projects-grid'>
      {projects.map((project) => {
        return (
          <div
            className='project_card'
            style={{background: project.backgroundColor}}
            key={project.id}
          >
            <div className='project-image-box_agency'>
              <img
                src={project.logoUrl}
                loading='lazy'
                alt=''
              />
            </div>
            <div className='project-autor-block_agency'>
              <h5 className='project-name_agency'>{project.name}</h5>
              <div className='project-autor-info_agency'>
                    {project.shortDescr}
              </div>
            </div>
            <Link
              to={'/project/'+ project.id}
              className='project-link-block'
            >
              <div
                className='play-block'
              >
                <div className='play-block_text'>Check details</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: projectsSelectors.getProjects(state),
});

export default connect(mapStateToProps, null)(ProjectsList);
