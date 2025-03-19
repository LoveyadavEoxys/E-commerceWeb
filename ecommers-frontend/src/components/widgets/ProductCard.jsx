import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addToCart, removeFromCart } from '../../features/cartSlice/CartSlice';
import './ProductCard.css';

export default function ProductCard({ product }) {
  
  const userId = useSelector((state) => state.user.userDetail.userId);
  const [cartStatus, changeCartStatus] = useState('Add To Cart');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  const addedToCart = async () => {

    if (cartStatus === 'Add To Cart') {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
           'Authorization': `Bearer ${token}`
          
        },
  
      };

      try {
        const response = await fetch(`http://localhost:8082/cart/add/${userId}/${product.prodId}/1`, options);
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
       } catch (error) {
        console.error("There was an error with the fetch operation:", error);
      }
      dispatch(addToCart({ price: product.price }));


      changeCartStatus('added to cart');
    } else {
      changeCartStatus('Add To Cart');
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json",  
          'Authorization': `Bearer ${token}`
         
       },
  
      };

      try {
        const response = await fetch(`http://localhost:8082/cart/add/${userId}/${product.prodId}/-1`, options);
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        dispatch(addToCart({ price: product.price }));

        const data = await response.json();
       } catch (error) {
        console.error("There was an error with the fetch operation:", error);
      }
    }
    if (!userId || !product?.prodId) {

      console.log(userId);
      console.log(product?.prodId);
      alert("you have to login first");
      navigate('/Login');
    
    }

   

   
  };





 

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image}
      />
      <CardContent className="product-card-content">
        <Typography className="product-card-title">
          {product.prodName}
        </Typography>
        <Typography className="product-card-description">
          {product.description}
        </Typography>
        <Typography className="product-card-price">
          ₹{product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions className="product-card-actions">
        <Button className="product-card-button" size="small" onClick={() => {
          navigate(`/paymentPage`, { state: { price: product.price, products: [product] } });
        }}>
          Buy now
        </Button>
        <Button className="product-card-button" size="small" onClick={addedToCart}>
          {cartStatus}
        </Button>
      </CardActions>
    </Card>
  );
}
