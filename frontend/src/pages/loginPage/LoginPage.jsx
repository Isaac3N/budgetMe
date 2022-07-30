import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  Navbar } from "../../components/base"

import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";






const theme = createTheme({
    palette: {
      primary: {
        main: '#03a9f4',
      },
      textBottom : {
         main: '#f44336',
      },

    },
    typography: {
        fontFamily: 'Manrope, Arial',
 
      },
  });

const LoginPage=()=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const formValid = !username?.length || !password?.length 
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="gradient-bg">
        <ThemeProvider theme={theme}>
            <Navbar/>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Username"
                name="username"
                value={username|| ""}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                autoComplete="username"
                autoFocus
                />
                <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={password|| ""}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="current-password"
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                    />
                <Button disabled={formValid}
                type="submit"
                fullWidth
                variant="contained"
                style={{ color: '#FFFFFF'}}
                sx={{ mt: 5, mb: 2 }}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href={"/"} variant="body2" color='textBottom.main'>
                    Home
                    </Link>
                </Grid>
                <Grid item>
                    <Link href={"/register"} variant="body2" color='textBottom.main'>
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    
    </div>

  );
}
export default LoginPage;