import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/About"]}>
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
