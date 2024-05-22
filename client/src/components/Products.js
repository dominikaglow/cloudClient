import React, {useState, useEfect, useEffect} from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) return <div>Error fetching products</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;