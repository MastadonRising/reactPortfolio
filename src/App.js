import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <Route exact path={["/", "/About"]}>
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/sideNav">
            <sideNav />
          </Route>
          <Route exact path="/Resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
