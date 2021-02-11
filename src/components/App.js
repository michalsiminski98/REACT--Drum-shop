import React from 'react';
import {NavLink, Router} from 'react-router-dom';

import '../styles/App.css';

class App extends React.Component {

    render(){
  return (
      <Router>
        <header className="header">
            <NavLink to="/faq" activeClassName="selected">
                chuj
            </NavLink>
        </header>
      </Router>
  );
}
}

export default App;
