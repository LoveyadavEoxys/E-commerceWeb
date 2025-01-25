import React, { useState } from "react";
import './UpdateProduct.css';
import Navbar from "../../components/layout/Navbar";
import productsData from '../../assets/products/product.json';

const UpdateProduct = () => {
  const [products, setProducts] = useState(productsData);
  const [success, setSuccess] = useState(false);

  const handleQuantityChange = (e, id) => {
    const { value } = e.target;
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: value } : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
   
    const newProduct = {
      id: Date.now(),  // Unique ID based on the current timestamp
      name: "New Product",
      description: "Description of new product",
      price: 20.0,
      category: "Miscellaneous",
      image: "default-image.jpg",  // Placeholder image URL
      quantity: 0,
    };
    setProducts([...products, newProduct]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      <div className="update-product-container">
        <h2 className="update-product-title">Update Products</h2>
        <button className="add-product-button" onClick={handleAddProduct}>
          Add Product
        </button>
        <form className="update-product-form" onSubmit={handleSubmit}>
          {products.map((product) => (
            <div key={product.id} className="u-product-card">
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
                  onChange={(e) => handleQuantityChange(e, product.id)}
                  placeholder="Quantity"
                />
                <button
                  type="button"
                  className="remove-product-button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Remove Product
                </button>
              </div>
            </div>
          ))}
         
        </form>
        {success && <p className="success-message">Product updated successfully!</p>}
      </div>
    </div>
  );
};

export default UpdateProduct;
