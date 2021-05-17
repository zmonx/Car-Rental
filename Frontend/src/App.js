import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Cars from './pages/Cars';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Rent';
import Single from './pages/Single';

import Head from './components/header';
import Foot from './components/footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Rent from './pages/Rent';
import Manage from './pages/Manage';
import Edit from './pages/Edit';
import Test from './pages/Test';

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
            <Route path='/rent' component={Rent}/>
            <Route path='/single' component={Single}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/login' component={Login}/>
            <Route path='/manage' component={Manage}/>
            <Route path='/edit' component={Edit}/>
            <Route path='/test' component={Test}/>



          </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
