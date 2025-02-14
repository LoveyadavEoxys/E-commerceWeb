import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import Navbar from "../../components/layout/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigator = useNavigate();
  const [product, setProduct] = useState({
    prodName: "",
    description: "",
    price: "",

    image: "",
    category: "",
    quantity: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setProduct((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { prodName, price, quantity, image, category } = product;

    console.log(JSON.stringify([product]));

    if (!prodName || !price || !quantity || !image || !category) {
      alert("All fields except description are required!");
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([product]),
    };

    try {
      const response = await fetch("http://localhost:8082/products", options);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Product added successfully");

      navigator("/Inventory Management");
     
  
      console.log("Product added successfully:", data);

      setProduct({
        prodName: "",
        description: "",
        price: "",
        image: "",
        category: "",
        quantity: "",
      });
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
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
            name="prodName"
            value={product.prodName}
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
