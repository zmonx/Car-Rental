import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Cars from './pages/Cars';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Single from './pages/Single';

import Head from './components/header';
import Foot from './components/footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <div>
      <Router>
        <Head />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/cars' component={Cars}/>
            <Route path='/about' component={About}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/single' component={Single}/>
            <Route path='/detail' component={Detail}/>

          </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
