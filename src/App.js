// Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

// React
import React from 'react';

// Other
import './App.css';

// Components
import Header from "./components/Header";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Project />
    </div >
  );
}

export default App;