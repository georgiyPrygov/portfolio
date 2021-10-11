import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions from './projectsActions';

const itemsInitialState = [
      {
        id: "1",
        name: "Salvagedata",
        shortDescr: 'Data recovery business website, Wordpress based, google speed score 90-99',
        category: "business",
        backgroundColor: "#5F6D7F",
        logoUrl: "/assets/img/previews/sdr-preview.jpeg",
      },
      {
        id: "2",
        name: "Mightyforms",
        shortDescr: 'Form builder business website, Webflow based',
        category: "business",
        backgroundColor: "#2D3562",
        logoUrl: "/assets/img/previews/mf-site-preview.jpeg"
      },
      {
        id: "3",
        name: "Soundnova",
        shortDescr: 'Sounds e-commerce website, Cognito framework based',
        category: "business e-commerce",
        backgroundColor: "#1C193C",
        logoUrl: "/assets/img/previews/soundnova-preview.jpeg"
      },
      {
        id: "4",
        name: "Phoode",
        shortDescr: 'Creators and photographers platform, Symphony framework based',
        category: "business",
        backgroundColor: "#a0945a",
        logoUrl: "/assets/img/previews/phoode-preview.jpeg"
      },
      {
        id: "6",
        name: "Mightyforms app",
        shortDescr: 'Form builder web-app, MEAN stack',
        category: "web-app",
        backgroundColor: "#16A2B8",
        logoUrl: "/assets/img/previews/mf-app-preview.jpeg"
      },
    ]




const items = createReducer(itemsInitialState, {
    [actions.fetchProjectsSuccess]: (state, { payload }) => payload
})

const filter = createReducer('business', {
  [actions.changeFilter]: (state, { payload }) => payload
})

export default combineReducers({
    items,
    filter
  });
  