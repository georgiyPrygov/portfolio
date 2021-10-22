import { useRef } from 'react';
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Project from "./components/Project/ProjectDetailsView";
import HomeView from "./components/HomeView/HomeView";
import Header from './components/Header/Header';
import ScrollToTop from './scrollToTop';

function App() {

  const appRefs = {
    projectsRef: useRef(null),
    skillsRef: useRef(null),
    contactRef: useRef(null),
  }

  const scrollFunctions = {
    scrollToProjects: () => appRefs.projectsRef.current.scrollIntoView({ behavior: "smooth" }),
    scrollToSkills: () => appRefs.skillsRef.current.scrollIntoView({ behavior: "smooth" }),
    scrollToContact: () => appRefs.contactRef.current.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <div className='App'>
      <Header appRefs={appRefs} scrollFunctions={scrollFunctions}/>
      <ScrollToTop>
      <Switch>
        <Route exact path='/' render={() => <HomeView appRefs={appRefs} scrollFunctions={scrollFunctions}/>} />
        <Route exact path='/project/:projectId' component={Project} />
      </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
