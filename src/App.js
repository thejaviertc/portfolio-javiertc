// Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

// React
import React from 'react';

// Other
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import HomeContent from './HomeContent';
import VehiclesContent from './VehiclesContent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/portfolio-javiertc/" exact component={Home} />
          <Route path="/vehiculos" exact component={Vehicles} />
        </Switch>
      </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <Header />
    <hr />
    <HomeContent />
    <Footer />
  </div>
)

const Vehicles = () => (
  <div>
    <Header />
    <hr />
    <VehiclesContent />
    <Footer />
  </div>
)

export default App;