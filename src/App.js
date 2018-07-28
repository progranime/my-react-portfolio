import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import SocialShare from './components/SocialShare';

import Home from './routes/Home';
import About from './routes/About';
import Portfolios from './routes/Portfolios';
import Portfolio from './routes/Portfolios/id';
import Error from './routes/Error';
import Components from './routes/Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            {/* <SocialShare /> */}
            <Switch> {/* This will check the routes from top to bottom if have exists */}
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/portfolios" component={Portfolios} exact/>
              <Route path="/portfolio/:id" component={Portfolio} exact/>
              <Route path="/components" component={Components} exact/>
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
