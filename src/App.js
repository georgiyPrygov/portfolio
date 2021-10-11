import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Project from "./components/Project/ProjectDetailsView";
import HomeView from "./components/HomeView/HomeView";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/project/:projectId' component={Project} />
      </Switch>
    </div>
  );
}

export default App;
