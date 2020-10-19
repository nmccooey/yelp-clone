import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import Detail from "./routes/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants/:id/update' component={Update} />
          <Route exact path='/restaurants/:id' component={Detail} />
        </Switch>
      </Router>
    </RestaurantsContextProvider>
  );
};

export default App;
