import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/menus/Navigation";
import Landing from "./views/Landing";
import AdminView from "./views/AdminView";
import OfficerView from "./views/OfficerView";
import ClinicianView from "./views/ClinicianView";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Landing} />
      <Route exact path="/admin-view" component={AdminView} />
      <Route exact path="/officer-view" component={OfficerView} />
      <Route exact path="/clinician-view" component={ClinicianView} />
    </Router>
  );
}

export default App;
