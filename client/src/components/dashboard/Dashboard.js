import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Welcome to Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have successfully logged in!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
