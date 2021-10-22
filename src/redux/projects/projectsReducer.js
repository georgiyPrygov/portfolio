import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions from './projectsActions';

const itemsInitialState = [
      {
        id: "1",
        name: "Salvagedata",
        shortDescr: 'Data recovery business website, Wordpress based, google speed score 90-99',
        category: "business",
        mainDescr: 'With over 96.7% success rate, SalvageData has been the world`s leading ISO-certified data salvaging laboratory recovering personal and business data since 2003.',
        backgroundColor: "#5F6D7F",
        logoUrl: "/assets/img/previews/sdr-preview.jpeg",
        videoUrl: '/assets/videos/sdr-video.mp4',
        siteUrl: 'https://www.salvagedata.com/'
      },
      {
        id: "2",
        name: "Mightyforms",
        shortDescr: 'Form builder business website, Webflow based',
        category: "business",
        mainDescr: "Unlock powerful forms with limitless possibilities. Create and publish, get submissions, and analyze data. Automatically recover abandoned leads. Collect payments and donations; grow subscribers and more.",
        backgroundColor: "#2D3562",
        logoUrl: "/assets/img/previews/mf-site-preview.jpeg",
        videoUrl: '/assets/videos/mf-video.mp4',
        siteUrl: 'https://www.mightyforms.com'
      },
      {
        id: "3",
        name: "Soundnova",
        shortDescr: 'Sounds e-commerce website, Cognito framework based',
        category: "business e-commerce",
        backgroundColor: "#1C193C",
        logoUrl: "/assets/img/previews/soundnova-preview.jpeg",
        mainDescr: "SOUND EFFECTS LIBRARY PROFESSIONAL SFX FOR GAMES, MOVIES, TRAILERS, CARTOONS, TV-SHOWS & ANY YOUR PROJECTS",
        videoUrl: '/assets/videos/soundnova-video.mp4',
        siteUrl: 'https://soundnova.net'
      },
      {
        id: "4",
        name: "Phoode",
        shortDescr: 'Creators and photographers platform, Symphony framework based',
        category: "business",
        backgroundColor: "#a0945a",
        logoUrl: "/assets/img/previews/phoode-preview.jpeg",
        mainDescr: "Find the ideal creative professional, style, or technique for your food branding or advertising project",
        videoUrl: '/assets/videos/phoode-video.mp4',
        siteUrl: 'https://phoode.com'
      },
      {
        id: "6",
        name: "Mightyforms app",
        shortDescr: 'Form builder web-app, MEAN stack',
        category: "web-app",
        backgroundColor: "#16A2B8",
        logoUrl: "/assets/img/previews/mf-app-preview.jpeg",
        mainDescr: "Unlock powerful forms with limitless possibilities. Create and publish, get submissions, and analyze data. Automatically recover abandoned leads. Collect payments and donations; grow subscribers and more.",
        videoUrl: '/assets/videos/mf-app-video.mp4',
        siteUrl: 'https://app.mightyforms.com/'
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
  