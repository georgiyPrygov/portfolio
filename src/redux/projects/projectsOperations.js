import projectsActions from "./projectsActions"

const changeFilter = text => dispatch => {
    dispatch(projectsActions.changeFilter(text));
}
const showMobileMenu= mobileMenuState => dispatch => {
    dispatch(projectsActions.showMobileMenu(mobileMenuState));
}
const hideMobileMenu= mobileMenuState => dispatch => {
    dispatch(projectsActions.hideMobileMenu(mobileMenuState));
}
export default {
    changeFilter,
    showMobileMenu,
    hideMobileMenu
}