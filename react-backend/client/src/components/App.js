import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Animals from './Animals';
import Tech from './Tech';
import Woods from './Woods';

class App extends Component {
  
  render() {
    return (
     <Router>
       <div className='App'>
         <Navbar />
         <Route exact path='/' component={Home} />
         <Route exact path='/woods' component={Woods} />
         <Route exact path='/animals' component={Animals} />
         <Route exact path='/tech' component={Tech} />
       </div>
     </Router>
    );
  }
}

export default App;