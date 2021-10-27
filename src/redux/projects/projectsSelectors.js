import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.projects.filter;

const getItems = (state) => state.projects.items;

const getProjects = createSelector([getFilter, getItems], (filter, items) => {
    return items.filter((project) =>
      project.category.includes(filter)
    );
  });

const getMobileMenuState = (state) => state.projects.mobileMenuOpened;
  
  export default {
    getFilter,
    getItems,
    getProjects,
    getMobileMenuState
  };
  