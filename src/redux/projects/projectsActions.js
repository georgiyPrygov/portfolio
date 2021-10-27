import { createAction } from '@reduxjs/toolkit';


const changeFilter = createAction('projects/changeFilter');

const showMobileMenu = createAction('projects/showMobileMenu');

const hideMobileMenu = createAction('projects/hideMobileMenu');


export default {
    changeFilter,
    showMobileMenu,
    hideMobileMenu
}