import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import VenuesList from "./components/VenuesList";
import VenuesList_delete from "./components/VenuesList_delete";
import EditVenue from "./components/EditVenue";
import CreateVenue from "./components/CreateVenue";
import VenueSpecs from "./components/VenueSpecs";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={VenuesList} />
        <Route path="/delete" exact component={VenuesList_delete} />
        <Route path="/edit/:id" exact component={EditVenue} />
        <Route path="/create" exact component={CreateVenue} />
        <Route path="/specs/:id/" exact component={VenueSpecs} />
      </div>
    </Router>
  );
}

export default App;
