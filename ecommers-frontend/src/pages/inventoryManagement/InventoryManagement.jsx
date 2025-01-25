import React, { useState } from "react";
import './InventoryManagement.css';
import Navbar from "../../components/layout/Navbar";
import productsData from '../../assets/products/product.json';
import UpdateProductCard from "../../components/widgets/UpdateProductCard";
import { useNavigate } from "react-router-dom";


const InventoryManagement = () => {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();




  const handleAddProduct = () => {
   
    navigate('/Add Product');
  };



  return (
    <div>
      <Navbar />
      <div className="update-product-container">
        <h2 className="update-product-title">Update Products</h2>
        <button className="add-product-button" onClick={handleAddProduct}>
          Add Product
        </button>
        <div className="update-product" >
          {products.map((product) => (
            <UpdateProductCard
              key={product.id}
              product={product}


            />
          ))}

        </div>

      </div>

    </div>

  );
};

export default InventoryManagement;
