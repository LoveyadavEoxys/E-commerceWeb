import React, { useState } from "react";
import './AddProduct.css';
import Navbar from "../../components/layout/Navbar";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    quantity: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setProduct((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, price, quantity, image, category } = product;

    if (!name || !price || !quantity || !image || !category) {
      alert("All fields except description are required!");
      return;
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    };

    fetch('http://192.168.0.143:8080/products/addproducts', options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        alert("product  added successfully");
      })
      .then((data) => {
        console.log("Product added successfully:", data);
        
        setProduct({
          name: "",
          description: "",
          price: "",
          image: "",
          category: "",
          quantity: "",
        });
      })
      .catch((error) => {
        console.error("There was an error with the fetch operation:", error);
      });
  };

  return (
    <div>
      <Navbar />
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
            required
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
    </div>
  );
};

export default AddProduct;
