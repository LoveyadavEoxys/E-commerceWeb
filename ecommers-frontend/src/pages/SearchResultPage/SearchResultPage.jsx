import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/widgets/ProductCard';
import Navbar from '../../components/layout/Navbar';
import './SearchResultPage.css';
import { useSelector } from 'react-redux';
import UpdateProductCard from '../../components/widgets/UpdateProductCard';


const SearchResultPage = () => {
    const location = useLocation();
    const { state } = location;
    const products = Array.isArray(state) ? state : [];
    const role = useSelector((state) => state.user.userDetail.role);
    const searchHandler = () => {

        if (role === 'Seller') {

            return products.length > 0 ? (
                <div style={{ display: 'block', width: '1000px' }}>
                    {products.map((product) => (
                        <UpdateProductCard key={product.id} product={product} />
                    ))}
                </div>

            ) : (
                <p>No products found.</p>
            );
        } else {
            return products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            );
        }
    };


    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='SearchResult-products'>
                {searchHandler()}
            </div>
        </>
    );
};

export default SearchResultPage;
