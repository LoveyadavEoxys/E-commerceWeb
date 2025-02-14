import React, { useState ,useEffect} from "react";
import './InventoryManagement.css';
import Navbar from "../../components/layout/Navbar";
import productsData from '../../assets/products/product.json';
import UpdateProductCard from "../../components/widgets/UpdateProductCard";
import { useNavigate } from "react-router-dom";


const InventoryManagement = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/products');
        const productsData = await response.json();
       setProducts(productsData.data);
       
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchData();
  }, []);
  const handleProductRemoval = (productId) => {
    setProducts(products.filter((product) => product.prodId !== productId));
  };

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
              key={product.prodId}
              product={product}
              onProductRemove={handleProductRemoval}

            />
          ))}

        </div>

      </div>

    </div>

  );
};

export default InventoryManagement;
