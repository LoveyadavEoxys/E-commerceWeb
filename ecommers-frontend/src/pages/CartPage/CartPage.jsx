import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import CartProductCard from '../../components/widgets/CartProductCard';
import './Cartpage.css';

const CartPage = () => {
  const token = sessionStorage.getItem("token");
  const userId = useSelector((state) => state.user.userDetail?.userId);

  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCartData = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await fetch(`http://localhost:8082/cart/${userId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      
      // Only update state if data has changed
      setProducts((prev) => (JSON.stringify(prev) === JSON.stringify(data.data) ? prev : data.data || []));
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setProducts([]);
    }
  }, [userId, token]);

  // Fetch total price
  const fetchTotalPrice = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await fetch(`http://localhost:8082/cart/getTotalPrice/${userId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setTotalAmount(data.data || 0);
    } catch (error) {
      console.error('Error fetching total price:', error);
    }
  }, [userId, token]);

  useEffect(() => {
    fetchCartData();
    fetchTotalPrice();
  }, [userId, fetchCartData, fetchTotalPrice]); // Removed products to prevent infinite calls

  // Handle product removal
  const handleCartProductRemoval = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product.prodId !== productId)
    );
  };

  // Fetch total price when products change
  useEffect(() => {
    fetchTotalPrice();
  }, [products, fetchTotalPrice]);

  // Handle Buy Now
  const buyNowHandler = () => {
    if (products.length === 0) {
      alert('Your cart is empty');
      return navigate('/Products');
    }
    navigate('/paymentPage', { state: { price: totalAmount } });
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          products.map((product) => (
            <CartProductCard 
              key={product.id} 
              product={product.product} 
              quantity={product.quantity} 
              onCartProductRemove={handleCartProductRemoval} 
            />
          ))
        )}
      </div>
      <div className="price-container">
        <div className="total-price">
          <span>Total Price:</span>
          <span className="price">₹{totalAmount.toFixed(2)}</span>
        </div>
        <button className="buy-now-btn" onClick={buyNowHandler}>Buy Now</button>
      </div>
    </div>
  );
};

export default CartPage;
