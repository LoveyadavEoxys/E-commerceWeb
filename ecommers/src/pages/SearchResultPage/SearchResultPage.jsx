import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/widgets/ProductCard';
import Navbar from '../../components/layout/Navbar';
import './SearchResultPage.css';

const SearchResultPage = () => {
    const location = useLocation();
    const { state } = location;


    const products = Array.isArray(state) ? state : [];

    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='SearchResult-products'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </>
    );
};

export default SearchResultPage;
