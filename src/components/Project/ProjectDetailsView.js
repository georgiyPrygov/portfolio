import { connect } from "react-redux";
import "./ProjectDetailsView.scss";
const Project = ({chosenId, projects}) => {
  const filteredItems = projects.filter(
    (project) => project.id === chosenId
  );
  return (
    <div className="project-container">
      {filteredItems.map((project) => {
        return (
          <div key={project.id} className="project-name">
            <div className="section first-project">
              <div className="w-container">
                <div className="contents">
                  <h1 className="project-heading">{project.name}</h1>
                  <p className="description project">{project.shortDescr}</p>
                </div>
              </div>
            </div>
            <div className="section video">
              <div className="w-container">
                <div className="cover-media">
                  <video
                    width="100%"
                    autoPlay
                    preload="auto"
                    playsInline
                    loop
                    muted
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="section project-last">
              <div className="w-container">
                <div className="w-layout-grid">
                  <div className="grid-block_heading-wrap">
                    <h5 className="h5_block_subtitle">
                      About project
                    </h5>
                  </div>
                  <div className="description_wrap_grid agency">
                    <p className="description">
                     {project.mainDescr}
                    </p>
                    <a href={project.siteUrl}  rel="noreferrer" target="_blank" className="go-to-project_ink-block">Go to website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  projects: state.projects.items,
});

export default connect(mapStateToProps, null)(Project);
