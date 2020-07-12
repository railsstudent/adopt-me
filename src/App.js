import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";
import SearchParams from './SearchParam';
import Details from './Details';

const App = () => (
  <React.StrictMode>
    <div>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </React.StrictMode>
);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
