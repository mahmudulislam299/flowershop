import React, { useRef } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Sinup.css";

// ✅ Firebase config (same as your firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyBfqqmZv7MBkJETNQfri9U8lv2wxl05H7U",
  authDomain: "flowerstore-492cd.firebaseapp.com",
  projectId: "flowerstore-492cd",
  storageBucket: "flowerstore-492cd.appspot.com",
  messagingSenderId: "70805200129",
  appId: "1:70805200129:web:53def067e0873a5e068f00",
  measurementId: "G-L3NR19PTBL",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const theme = createTheme();

export default function Forgotpass() {
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return alert("Please enter your email address!");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("✅ Password reset email sent! Please check your inbox.");
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/291530/pexels-photo-291530.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight={700} color="#c2185b">
              Forgot Your Password?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mt: 1, mb: 3, color: "#777", textAlign: "center" }}
            >
              Don’t worry — we’ll send you a link to reset your password.
            </Typography>

            <Box component="form" onSubmit={handleReset}>
              <TextField
                inputRef={emailRef}
                label="Email Address"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  mb: 2,
                  bgcolor: "#c2185b",
                  "&:hover": { bgcolor: "#ad1457" },
                }}
              >
                Send Reset Link
              </Button>
              <Button
                fullWidth
                onClick={() => navigate("/signin")}
                variant="outlined"
                sx={{ color: "#c2185b", borderColor: "#c2185b" }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
