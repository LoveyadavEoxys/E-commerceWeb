import { React, useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../../components/widgets/ProductCard';
import productsData from '../../assets/products/product.json'
import Navbar from '../../components/layout/Navbar';

const ProductPage = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => { setProduct(productsData) }, []);

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
   <div style={{ marginBottom: '100px' }}>
  <Navbar />
</div>


      <Carousel responsive={responsive}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        



      </Carousel>


    </div>
  )
}

export default ProductPage
