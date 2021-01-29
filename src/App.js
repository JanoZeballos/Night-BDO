import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home'
import Oceano from './components/oceano/Cards';
import Khan from './components/oceano/Khan';
import E404 from './components/E404';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Oceano' exact component={Oceano} />
        <Route path='/oceano/Khan' exact component={Khan} />
        <Route path='/Night' exact component={E404} />
        <Route path='/Life' exact component={E404} />
        <Route path='/E404' exact component={E404} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
