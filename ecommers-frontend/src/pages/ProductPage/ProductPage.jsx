import { React, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../components/widgets/ProductCard";
import Navbar from "../../components/layout/Navbar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    "Electronics",
    "Smartphones",
    "Clothing",
    "Furniture",
    "Books",
    "Toys",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Navbar />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ddd",
          }}
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <h3 style={{ margin: 0 }}>Categories</h3>
          <span>{isCategoryOpen ? "▲" : "▼"}</span>
        </div>

        {isCategoryOpen && (
          <div
            style={{
              padding: "10px 20px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderTop: "none",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  color: selectedCategory === "All" ? "blue" : "black",
                }}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    cursor: "pointer",
                    color: selectedCategory === category ? "blue" : "black",
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Carousel responsive={responsive}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductPage;
