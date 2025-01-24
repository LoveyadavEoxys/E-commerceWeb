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

     
      <Typography variant="body1" className="contact-description" paragraph>
        We’d love to hear from you! Please fill out the form below or use the contact details to get in touch with us.
      </Typography>

      
      <Box component="form" className="contact-form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              className="contact-input"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              className="contact-input"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              className="contact-input"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              className="contact-input"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className="contact-button"
              type="submit"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>

     
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
