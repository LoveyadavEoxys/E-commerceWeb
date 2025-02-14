import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import CartProductCard from '../../components/widgets/CartProductCard';
import './Cartpage.css';

const CartPage = () => {
  const userId = useSelector((state) => state.user.userDetail?.userId); 
  const totalAmount = useSelector(state => state.cart.totalAmount);
  // const price = useSelector((state) => state.cart.totalAmount);

 
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {

    console.log(totalAmount);
    console.log("totalAmount");

    if (!userId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8082/cart/${userId}`);
        const data = await response.json();
        
        console.log("Fetched Products:", data.data);
        setProducts(Array.isArray(data.data) ? data.data : []); 

      } catch (error) {
        console.error('Error occurred:', error);
        setProducts([]); 
      }
    };

    fetchData();
  }, [userId]);

  const buyNowHandler = () => {
    if (products.length === 0) {
      alert('Your cart is empty');
      navigate('/Products');
    } else {
      navigate(`/paymentPage`, { state: { price: totalAmount, products: products } });
    }
  };
  const handleCartProductRemoval = (productId) => {
    setProducts(products.filter((product) => product.product.prodId !== productId));
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {products.map((product) => (
              <CartProductCard key={product.id} product={product.product} quantity ={product.quantity} onCartProductRemove={handleCartProductRemoval}/>
            ))}
          </div>
        )}
      </div>
      <div className="price-container">
        <div className="total-price">
          <span>Total Price:</span>
          <span className="price">₹{totalAmount}</span>
        </div>
        <button className="buy-now-btn" onClick={buyNowHandler}>Buy Now</button>
      </div>
    </div>
  );
};

export default CartPage;
