import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const [cartStatus, changeCartStatus] = useState('Add To Cart');
  const dispatch = useDispatch();

  const addedToCart = () => {
    if (cartStatus === 'Add To Cart') {
      changeCartStatus('added to cart');
      dispatch(addToCart(product));
    } else {
      changeCartStatus('Add To Cart');
      dispatch(removeFromCart(product.id));
    }
  };

  const navigate = useNavigate();

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image}
      />
      <CardContent className="product-card-content">
        <Typography className="product-card-title">
          {product.name}
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
          navigate(`/paymentPage/${product.id}`, { state: { price: product.price } });
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
