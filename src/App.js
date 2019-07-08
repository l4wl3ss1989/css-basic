import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import './App.module.scss';
import Home from './containers/Home/Home';
import Customers from './containers/Customers/Customers';
import Packages from './containers/Packages/Packages';
import StartHosting from './containers/StartHosting/StartHosting';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch> 
            <Route path="/packages" exact component={Packages} />
            <Route path="/customers" component={Customers} />
            <Route path="/start-hosting" exact component={StartHosting} />
            <Route path="/support" exact component={Home} />
            <Route path="/terms-of-use" exact component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
