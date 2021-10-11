import projectsActions from "./projectsActions"

const changeFilter = text => dispatch => {
    dispatch(projectsActions.changeFilter(text));

    console.log(text);
}

export default {
    changeFilter
}