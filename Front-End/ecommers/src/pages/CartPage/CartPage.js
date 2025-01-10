import React from 'react';
import { useSelector } from 'react-redux';


import CartProductCard from '../../components/widgets/CartProductCard';



const CartPage = () => {

  const products = useSelector((state) => state.cart.products);

  return (
    <div style={{ padding: '20px' }}>
     
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {products.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

