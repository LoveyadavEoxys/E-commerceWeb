import React, { useState } from "react";
import './AddProduct.css'
import Navbar from "../../components/layout/Navbar";

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.quantity || !product.image) {
      alert("All fields except description are required!");
      return;
    }
    onAddProduct(product);
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
      quantity: "",
    });
  };

  return (
    <dev>
      <Navbar></Navbar>
    <div className="add-product-container">
      <h2 className="add-product-title">Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          className="add-product-input"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <textarea
          className="add-product-textarea"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          className="add-product-input"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          className="add-product-input"
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          className="add-product-input"
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          className="add-product-input"
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <button className="add-product-button" type="submit">
          Add Product
        </button>
      </form>
    </div>
    </dev>
  );
};

export default AddProduct;
