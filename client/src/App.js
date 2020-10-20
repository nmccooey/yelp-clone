import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Edit from "./routes/Edit";
import Detail from "./routes/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants/:id/edit' component={Edit} />
          <Route exact path='/restaurants/:id' component={Detail} />
        </Switch>
      </Router>
    </RestaurantsContextProvider>
  );
};

export default App;
