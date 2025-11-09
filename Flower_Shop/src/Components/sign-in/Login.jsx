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
import { Googleauth } from "./Googleauth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const theme = createTheme();

export function SignInSide() {
  const navigate = useNavigate();

  // Redirect if already signed in
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsub();
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("token", JSON.stringify(userCredential.user));
        alert("Welcome back to Shahbag Cake Shop 🎂");
        navigate("/");
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
                🍰 Welcome Back, Sweet Friend!
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1, mb: 2, color: "#777" }}>
                Sign in to order your favorite cakes and desserts
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
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
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
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgotpass" variant="body2" color="#c2185b">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2" color="#c2185b">
                      {"Don’t have an account? Sign Up"}
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
