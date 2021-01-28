import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home'
import Khan from './components/Khan';
import E404 from './components/E404';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Khan' exact component={Khan} />
        <Route path='/Night' exact component={E404} />
        <Route path='/Vell' exact component={E404} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
