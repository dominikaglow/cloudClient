import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <Router>
        <div className="App">
          <div className='links'>
            <Link to="/products">Products</Link>
          </div>
          <Routes>
            <Route path="/products" exact Component={Products} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
