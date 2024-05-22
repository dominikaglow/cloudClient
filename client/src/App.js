import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import Payment from './components/Payments';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/products" exact Component={Products} />
            <Route path="/payments" exact Component={Payment} />
            <Route path="/cart" exact Component={Cart} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
