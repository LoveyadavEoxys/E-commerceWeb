import { useNavigate } from "react-router-dom";
import './PaymentPage.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Navbar from "../../components/layout/Navbar";

const PaymentPage = () => {
  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = useSelector((state) => state.user.isLogin);
  const userId = useSelector((state) => state.user.userDetail.userId);
  const products = location.state?.products;
  const price = location.state?.price;

  

  const handlePayment = async () => {
    if (!isLogin) {
      alert('You have to login first');
      navigate('/Login');
      return;
    }

    alert(`Payment of ₹${price} Successful!`);
    
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },

      
    };

    try {
      
      if (products && products.length ===1 ) {
        console.log("time1");
      
        const response = await fetch(`http://localhost:8082/order/${userId}/${products[0].prodId}`, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Product added to orders successfully");
      } else {
        console.log("time12");
        // Handle multiple products or no products
        const response = await fetch(`http://localhost:8082/order/${userId}`, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Products added to orders successfully");
      }

      navigate('/Products');
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
      alert("There was an error processing your payment");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="payment-container">
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
    </div>
  );
};

export default PaymentPage;
