import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions from './projectsActions';

const itemsInitialState = [
  {
    id: "0",
    name: "Agora",
    shortDescr: 'Hotel management system + booking widget',
    category: "web-app",
    mainDescr: 'Hotel booking system + management system built in MERN stack',
    backgroundColor: "#1976d2",
    logoUrl: "/assets/img/previews/booking-image.jpg",
    videoUrl: '/assets/videos/agora-movie.mp4'
  },
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
      {
        id: "3",
        name: "Soundnova",
        shortDescr: 'Sounds e-commerce website, Cognito framework based',
        category: "business e-commerce web-app",
        backgroundColor: "#1C193C",
        logoUrl: "/assets/img/previews/soundnova-preview.jpeg",
        mainDescr: "SOUND EFFECTS LIBRARY PROFESSIONAL SFX FOR GAMES, MOVIES, TRAILERS, CARTOONS, TV-SHOWS & ANY YOUR PROJECTS",
        videoUrl: '/assets/videos/soundnova-video.mp4'
      },
      {
        id: "4",
        name: "Phoode",
        shortDescr: 'Creators and photographers platform, Symphony framework based',
        category: "business web-app",
        backgroundColor: "#a0945a",
        logoUrl: "/assets/img/previews/phoode-preview.jpeg",
        mainDescr: "Find the ideal creative professional, style, or technique for your food branding or advertising project",
        videoUrl: '/assets/videos/phoode-video.mp4',
        siteUrl: 'https://phoode.com'
      },
      {
        id: "5",
        name: "Hotel Content Builder",
        shortDescr: 'AI content builder for hotels built in Next.js, Typescript, SCSS',
        category: "web-app",
        backgroundColor: "#028039",
        logoUrl: "/assets/img/previews/hcb-image.jpg",
        mainDescr: "Find hotel and generate content for it",
        videoUrl: '/assets/videos/hcb-video.mp4',
        siteUrl: 'https://hcb.resabee.ai/'
      },
    ]




const items = createReducer(itemsInitialState, {
    [actions.fetchProjectsSuccess]: (state, { payload }) => payload
})

const filter = createReducer('web-app', {
  [actions.changeFilter]: (state, { payload }) => payload
})
const mobileMenuOpened = createReducer(false, {
  [actions.showMobileMenu]: (state, { payload }) => payload,
  [actions.hideMobileMenu]: (state, { payload }) => payload
})


export default combineReducers({
    items,
    filter,
    mobileMenuOpened
  });
  