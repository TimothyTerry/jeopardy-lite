import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
//Import the Navigation component
import Navigation from "./components/navigation/navigation";
import { Route, Switch } from "react-router-dom";
import Errorpage from "./components/errorpage/Error";
import Jeopardy from "./components/jeopardy/Jeopardy";

class App extends Component {
  render() {
    return (
      <div>
        {/* render the Navigation component */}
        <Navigation />
        <Switch >
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="" />}

          />

          <Route
            extact
            path="/welcome/:name"
            render={(props) => <Welcome {...props} name={props.match.params.name} />}

          />
          <Route
            extact
            path="/clock"
            component={Clock} />

          <Route
            extact
            path="/contact"
            component={Contact} />




          <Route
            path="/jeopardy"
            component={Jeopardy} />

          <Route
            component={Errorpage} />



        </Switch>
      </div>
    );
  }
}
export default App;