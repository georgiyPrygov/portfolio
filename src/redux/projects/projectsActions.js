import { createAction } from '@reduxjs/toolkit';

const fetchProjectsRequest = createAction('projects/fetchProjectsRequest');
const fetchProjectsSuccess = createAction('projects/fetchProjectsSuccess');
const fetchProjectsError = createAction('projects/fetchProjectsError');

const changeFilter = createAction('projects/changeFilter');



export default {
    changeFilter
}