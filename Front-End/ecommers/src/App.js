
import HomePage from './pages/HomePage/HomePage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from './pages/PaymentPage/PaymentPage';



function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        
      </Route>
      <Route path="/paymentPage/:id" element={<PaymentPage></PaymentPage>}>
        
      </Route>
    </Routes>
  </BrowserRouter>
);
   
}


export default App;
