import { connect } from 'react-redux';

const Project = (props) => {
    const { projectId } = props.match.params;
    const filteredItems = props.projects.filter(project => project.id === projectId );
    console.log(filteredItems);
    return (
        <div className="project-container">
            Project details {projectId}
            {filteredItems.map(project => {
                return (
                    <div key={project.id} className="project-name">{project.name}</div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => ({
    projects : state.projects.items
})


export default connect(mapStateToProps, null)(Project);