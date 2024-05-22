import React, { useContext } from "react";
import {CartContext} from "../CartContext";
import { Link } from "react-router-dom";
import "../stylesheets/Cart.css";


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li className='list' key={item.id}>
                                {item.name} - Price: {item.price.toFixed(2)} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p className="totalCost">Total Cost: ${totalCost}</p>
                    <Link to="/payments">
                        <button>Proceed to Payment</button>
                    </Link>
                </>
            )}
            <Link to="/products">
                <button className="backToProducts">Back to Products</button>
            </Link>
        </div>
    );
};

export default Cart;