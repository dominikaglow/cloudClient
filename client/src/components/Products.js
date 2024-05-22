import React, {useState, useEffect, useContext} from 'react';
import '../stylesheets/Products.css';
import  {Link} from 'react-router-dom';
import { CartContext } from "../CartContext";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(products => setProducts(products))
            .catch(err => console.error(err));
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const cartItem = updatedCart.find(item => item.id === product.id);

        if (cartItem) {
            if (cartItem.quantity < 10) {
                cartItem.quantity = cartItem.quantity + 1;
            } else {
                alert('Maximum quantity reached for this product.');
            }
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        setCart(updatedCart);
    };

    const removeFromCart = (product) => {
        const cartProducts = [...cart];
        console.log(product.id);
        const cartItem = cartProducts.find(item => item.id === product.id);
        if(cartItem) {
            if(cartItem.quantity  === 1) {
                setCart(cart.filter(item => item.id !== product.id));
            }
            else {
                cartItem.quantity = cartItem.quantity - 1;
                setCart(cartProducts);
            }
            console.log(cart);
        }
    };

    const isProductInCart = (product) => {
        const cartItem = cart.find(item => item.id === product.id);
        return cartItem && cartItem.quantity > 0;
    };


    return (
        <div className='products-container'>
            <h1>Products</h1>
            <ul className='list'>
                {products.map(product => (
                    <li key={product.id} className='item'>
                        <span className="product-name">{product.name}</span> - <span className="product-price">${product.price.toFixed(2)}</span>
                        {isProductInCart(product) ? (
                            <button className='removeFromCart' onClick={() => removeFromCart(product)}>Remove from cart</button>
                        ) : ''}
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
            <div className='summary'>
                <h2>Summary</h2>
                {cart.length > 0 && (
                    <>
                    <Link to="/cart">
                        <button>View Cart</button>
                    </Link>
                    <Link to="/payments">
                        <button>Proceed to Payment</button>
                    </Link>
                </>
                )}
            </div>
        </div>
    );
};

export default Products;