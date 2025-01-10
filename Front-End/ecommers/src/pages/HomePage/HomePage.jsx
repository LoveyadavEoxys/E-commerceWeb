import Navbar from "../../components/layout/Navbar";

import { useState } from "react";
import CartPage from '../CartPage/CartPage.js'
import LoginPage from "../LoginPage/LoginPage";
import ProductPage from "../ProductPage/ProductPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import PaymentPage from "../PaymentPage/PaymentPage"
import SignUpPage from '../SignUpPage/SignUpPage'
import './HomePage.css'




export default function HomePage() {

    const [view, setView] = useState("Products");
    const handleViewChange = (page) => {
        setView(page);
    }

   

    const renderContent = () => {
        switch (view) {
            case "Products":
                return <ProductPage></ProductPage>;
            
            case "Cart":
                return <CartPage></CartPage>;
            case "Login":
                return <LoginPage></LoginPage>;
           case "SignUp":
                return <SignUpPage></SignUpPage>;
            case "Profile":
                return <ProfilePage></ProfilePage>;
           
        }
    };


    return (
        <div>
            <div className="navbar">
                <Navbar onPageChange={handleViewChange}></Navbar>
            </div>
            <div>
                <div style={{ marginTop: "20px" }}>{renderContent()}</div>
            </div>

        </div>
    );
}