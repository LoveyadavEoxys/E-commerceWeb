import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';


import './Cartpage.css'


import CartProductCard from '../../components/widgets/CartProductCard';




const CartPage = () => {
  const price = useSelector((state) => state.cart.totalAmount);
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();


  const buyNowHandler = () => {
    navigate('/paymentPage/1 ', { state: { price } });
  }

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ padding: '20px', textAlign: 'center' }}>

        {products.length === 0 ? (
          <p >Your cart is empty.</p>
        ) : (
          <div>
            {products.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>

        )}
      </div>
      <div class="price-container">
        <div class="total-price">
          <span>Total Price:</span>
          <span class="price">₹{price.toFixed(2)}</span>
        </div>
        <button class="buy-now-btn" onClick={buyNowHandler}>Buy Now</button>
      </div>

    </div>
  );
};

export default CartPage;

