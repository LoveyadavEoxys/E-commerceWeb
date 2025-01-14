import React from "react";
import { Container, Grid, Card, CardContent, Avatar } from "@mui/material";
import "./AboutUs.css";
import Navbar from "../../components/layout/Navbar";

const teamMembers = [
  {
    name: "Love Yadav",
    role: "Full Stack Developer",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEvnn_-y2VNHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703342738448?e=1742428800&v=beta&t=z7dsXijrhHGBMsXoANDVXr_d7x_piUIi7quGTvgOLRg",
  },
  
  
  {
    name: "charan",
    role: "Full Stack Developer",
    avatar: "/static/images/avatar/3.jpg",
  },
];

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
    <Container maxWidth="lg" className="container">
    
      <h3 className="page-title">About Us</h3>

    
      <div className="introduction">
        <p>
          Welcome to our e-commerce platform! We are a team of passionate developers and designers
          committed to delivering high-quality digital solutions. Our goal is to create an intuitive
          and user-friendly experience for our customers.
        </p>
      </div>


   
      <div className="team">
        <h4 className="team-title">Meet Our Team</h4>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent className="card-content">
                  <Avatar
                    alt={member.name}
                    src={member.avatar}
                    className="avatar"
                  />
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
    </div>
  );
}

export default AboutUs;
