import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Banner />
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/portfolio" component={Portfolio} exact/>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
