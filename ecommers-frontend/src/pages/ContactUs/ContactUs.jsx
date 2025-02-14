import React from "react";
import { Container, Grid, TextField, Button, Typography, Box } from "@mui/material";
import "./ContactUs.css";
import Navbar from "../../components/layout/Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar></Navbar>
    <Container maxWidth="md" className="contact-container">
     
      <Typography variant="h3" className="contact-title" gutterBottom>
        Contact Us
      </Typography>

     
      
      
     

     
      <Box className="contact-details" mt={4}>
        <Typography variant="h5" gutterBottom>
          Our Contact Information
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> support@ecommerce.com
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> +91 234 567 890
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> bangaluru ,india
        </Typography>
      </Box>
    </Container>
    </div>
  );
}

export default ContactUs;
