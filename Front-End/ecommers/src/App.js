

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from './pages/PaymentPage/PaymentPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import AddProduct from "./pages/AddProduct/AddProduct";



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage></ProductPage>}></Route>
        <Route path="/paymentPage/:id" element={<PaymentPage></PaymentPage>}></Route>
        <Route path="/Products" element={<ProductPage></ProductPage>}></Route>
        <Route path="/Cart" element={<CartPage></CartPage>}></Route>
        <Route path="/Login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/Profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/About Us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Contact Us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/Update Product" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/Add Product" element={<AddProduct></AddProduct>}></Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
