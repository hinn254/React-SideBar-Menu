import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Product from './pages/Products';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/reports" component={Reports} />
      <Route path="/products" component={Product} />


      </Switch>
    </Router>
    </>
  );
}

export default App;
