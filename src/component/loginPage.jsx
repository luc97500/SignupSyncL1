import React, { useEffect, useState } from "react";
import { Button, TextField, Checkbox, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import logi from "../asset/login-passcode.png"
import { Link } from "react-router-dom";
import s from "../asset/s.jpg"
import { SignUp } from "./signUpPage";

const theme = createTheme();

export const LoginPge = () => {
  
  const [formField, setFormField] = useState({
    email: '',
    password: ''
});

const onChangeInput = (e) => {
  setFormField(formFields => ({
      ...formFields,
      [e.target.name]: e.target.value
  }));
}

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
         backgroundImage: `url(${logi})`, // Use the imported image
         backgroundSize: 'cover',
         backgroundPosition: 'center' ,
         height: '100vh',
         position: "relative",
         padding: 4
      }}>
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: 4,
            borderRadius: 3,
            boxShadow: 4,
            position: "relative",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Here
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={formField.name}
              onChange={onChangeInput}
              error={formField.name === ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formField.password}
              id="password"
              onChange={onChangeInput}
              error={formField.password === ""}
            />
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Link to = "/signup" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember Me"
                />
              </Grid>
            </Grid>
            <Link to= "/home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#f50057" }}
            >
              Login
            </Button>
            </Link>
            <Grid container justifyContent="center">
              <Grid item sx={{color:"blue"}}>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: 1,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
        }}
      >
      </Box>
    </ThemeProvider>
  );
}

// export default LoginPge;
