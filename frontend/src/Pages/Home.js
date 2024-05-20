import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopDeals from '../components/Home/TopDeals';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <TopDeals products={products} />
        </>
    );
}
