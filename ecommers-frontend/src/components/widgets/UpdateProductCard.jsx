import React, { useState } from 'react';
import './UpdateProductCard.css';
import { useNavigate } from 'react-router-dom';

const UpdateProductCard = ({ product, onProductRemove }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(product.quantity || 0);
  let token = sessionStorage.getItem("token");

  const handleQuantityChange = async (e, id) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);

    try {
      const response = await fetch(`http://localhost:8082/product/update/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify( newQuantity ), // Send as an object
      });

      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRemoveProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8082/product/delete/${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to remove product');
      }

      onProductRemove(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="u-product-card">
      <img src={product.image} alt={product.prodName} className="u-product-image" />
      <div className="u-product-info">
        <h3>{product.prodName}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
      <div className="u-product-actions">
        <input
          className="update-product-input"
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(e, product.prodId)}
          placeholder="Quantity"
        />
        <button
          type="button"
          className="remove-product-button"
          onClick={() => handleRemoveProduct(product.prodId)}
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProductCard;
