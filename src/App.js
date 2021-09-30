import React from 'react';
import Main from '../src/pages/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
