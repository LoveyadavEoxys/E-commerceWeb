
import { useNavigate } from "react-router-dom";
import './PaymentPage.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cartSlice/CartSlice";
import { useSelector } from "react-redux";


const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);



  const handlePayment = () => {
    if (isLogin) {
      alert(`Payment of ₹${price} Successful!`);
      dispatch(clearCart());
      navigate('/Products')
    }
    else {
      alert(`you have to login first`);
      navigate('/Login')
    }

  }

  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const price = location.state?.price;

  return (
    <div className="payment-container">
      <div className="nav-bar">
        <button onClick={goBack} className="back-button">Go Back</button>
      </div>

      <div className="payment-content">
        <h1>Payment Page</h1>
        <div className="amount-container">
          <p>Total Amount:</p>
          <h2>₹{price.toFixed(2)}</h2>
        </div>
        <button className="pay-now-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
