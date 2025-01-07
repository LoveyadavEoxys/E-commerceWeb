import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="bottle"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bottle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Probott Freeze 1500ml Single Walled Stainless 
        Steel Water Bottle 1.5 Litre, Silver,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy now</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
