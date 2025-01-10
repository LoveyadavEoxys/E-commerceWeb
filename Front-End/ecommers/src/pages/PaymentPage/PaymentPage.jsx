
import { useNavigate } from "react-router-dom";
import './PaymentPage.css';
import { useLocation } from 'react-router-dom';


const PaymentPage = () => {
  const navigate = useNavigate();


  const handlePayment = () => {
    alert(`Payment of ₹${price} Successful!`);
  };

  const handleBack = () => {
    navigate(-1); 
  };
  const location = useLocation();
  const price = location.state?.price;

  return (
    <div className="payment-container">
      <header className="app-header">
        <button className="back-button" onClick={handleBack}>
          &lt; Back
        </button>
      </header>

      <div className="payment-content">
        <h1>Payment Page</h1>
        <div className="amount-container">
          <p>Total Amount:</p>
          <h2>₹{price}</h2>
        </div>
        <button className="pay-now-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
