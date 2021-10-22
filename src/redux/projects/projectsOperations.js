import projectsActions from "./projectsActions"

const changeFilter = text => dispatch => {
    dispatch(projectsActions.changeFilter(text));

    console.log(text);
}
const changeModalState = modalState => dispatch => {
    dispatch(projectsActions.changeModalState(modalState));

    console.log(modalState);
}

export default {
    changeFilter,
    changeModalState
}