import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Sinup.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Googleauth } from "../sign-in/Googleauth";

const theme = createTheme();

export function SignUpSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("🎉 Account created successfully!");
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="devcont">
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
                 "url('/cake-logo.jpg')",
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
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} color="#c2185b">
                🍰 Join Aishajaa's Cake Shop
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1, mb: 2, color: "#777" }}>
                Get exclusive cake offers, deals & baking inspiration!
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I agree to receive sweet updates 🍪"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#c2185b",
                    "&:hover": { bgcolor: "#ad1457" },
                  }}
                >
                  Create Account
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2" color="#c2185b">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                  <Googleauth />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
