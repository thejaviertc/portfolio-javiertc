//
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

//
import React from 'react';
import ReactDOM from 'react-dom';

//
import './index.css';
import * as serviceWorker from './serviceWorker';

//
import Header from "./components/Header";
import Content from './Content';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();