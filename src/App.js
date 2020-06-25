import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParam'

const App = () => (
  <div>
    <h1 id="something-import">Adopt me!</h1>
    <SearchParams></SearchParams>
  </div>
);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
