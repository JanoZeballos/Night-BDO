import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Khan from './components/pages/Khan'
import Night from './components/pages/Night'
import Vell from './components/pages/Vell'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Khan' exact component={Khan} />
        <Route path='/Night' exact component={Night} />
        <Route path='/Vell' exact component={Vell} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
