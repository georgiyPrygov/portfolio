import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects/projectsReducer";


const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
