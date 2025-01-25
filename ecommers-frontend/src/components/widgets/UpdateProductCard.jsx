import React from 'react';
import './UpdateProductCard.css';

const UpdateProductCard = ({ product }) => {
  return (
    <div className="u-product-card">
      <img src={product.image} alt={product.name} className="u-product-image" />
      <div className="u-product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
      <div className="u-product-actions">
        <input
          className="update-product-input"
          type="number"
          value={product.quantity}
        //   onChange={(e) => handleQuantityChange(e, product.id)}
          placeholder="Quantity"
        />
        <button
          type="button"
          className="remove-product-button"
        //   onClick={() => handleRemoveProduct(product.id)}
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};




export default UpdateProductCard;
