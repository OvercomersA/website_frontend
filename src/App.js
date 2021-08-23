import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./home";
import AboutUs from "./aboutUs";
import Departments from './departments';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/departments">
            <Departments></Departments>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
