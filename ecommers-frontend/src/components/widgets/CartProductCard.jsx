import * as React from 'react';
import './cartProductCard.css';
import { useDispatch ,useSelector } from 'react-redux';


const CartProductCard = ({ product,quantity,onCartProductRemove }) => {
    const userId = useSelector((state) => state.user.userDetail.userId);

    let token = sessionStorage.getItem("token");
    const Tproduct = product;
    // const handleRemoveClick = () => {
    //     dispatch(removeFromCart(product.id));
    // };
    const handleRemoveClick = async () => {
            try {
              const response = await fetch(`http://localhost:8082/cart/${userId}/${Tproduct.prodId}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${token}`, 
                 
              },
              });
            
              if (!response.ok) {
                throw new Error('Failed to remove product');
              }
              if(response.status)
              {
                onCartProductRemove(Tproduct.prodId);
              }
        
            //   onProductRemove(id);
            } catch (error) {
              console.log(error.message);
            }

          
          };
        




     



    return (
        <div className="cart-cart-container">
            <div className="cart-product-card">
                <div className="cart-product-image">
                    <img src={Tproduct.image || "https://via.placeholder.com/80"} alt={Tproduct.prodName} />
                </div>
                <div className="cart-product-details">
                    <div className="cart-product-title">{Tproduct.prodName}</div>
                    <div className="cart-product-description">{Tproduct.description}</div>
                    <div className="cart-product-price">Price: ₹{(Tproduct.price*quantity).toFixed(2)}</div>
                    <div className="cart-product-quantity">Quantity :  {quantity}</div>
                    <div className="quantity-controls">
                        <button className="cart-remove-button" onClick={handleRemoveClick}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;
