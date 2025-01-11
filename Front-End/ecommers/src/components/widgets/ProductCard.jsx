import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { addToCart, removeFromCart } from '../../features/cartSlice/CartSlice';


export default function ProductCard({ product }) {

  const [cartStatus, changeCartStatus] = useState('Add To Cart');
  const dispatch = useDispatch();
  const addedToCart = () => {
    if (cartStatus === 'Add To Cart') {
      changeCartStatus('added to cart');
      dispatch(addToCart(product));
    }


    else {
      changeCartStatus('Add To Cart');

      dispatch(removeFromCart(product.id));
    }
  }
   const navigate = useNavigate();


  return (

    <Card sx={{ maxWidth: 345, marginLeft: '40px', marginTop: '20px' }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
    navigate(`/paymentPage/${product.id}`, { state: { price: product.price } });
  }}>Buy now</Button>
        <Button size="small" onClick={addedToCart}>{cartStatus}</Button>
      </CardActions>
    </Card>
  );
}
