import React from 'react';
import Main from './pages/Main';
import Details from './pages/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/details/:id" component={Details} />
          {/* OBS 1 */}
        </Switch>
      </Router>
  );
}

export default App;

// 1 - details/:id is the id of the route, which i defined as been called id