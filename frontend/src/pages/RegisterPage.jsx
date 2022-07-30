import React, { useEffect } from 'react'
import { Navbar } from '../components/base'
import { register } from '../context/actions/register'


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

const RegisterPage=()=> {
    useEffect(()=>{
        register()
    }, [])

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
    };

    return (
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
            Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
            />
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ color: '#FFFFFF'}}
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href={"/"} variant="body2" color='textBottom.main'>
                    Home
                </Link>
                </Grid>
                <Grid item>
                <Link href={"/login"} variant="body2" color='textBottom.main'>
                    {"Already Have an Account? Sign In!"}
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }

export default RegisterPage