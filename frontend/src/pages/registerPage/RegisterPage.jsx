import React, { useContext, useEffect, useState} from 'react'
import { Navbar } from '../../components/base'



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

import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { GlobalContext } from '../../context/Provider';

import { useNavigate} from 'react-router-dom';
import { register } from '../../context/actions/auth/register';


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

    const navigate = useNavigate()
    const [fieldErrors, setFieldErrors] = useState({});
    
    const {
        authDispatch,
        authState: {
          auth: { error, data },
        },
      } = useContext(GlobalContext);
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (error) {
          for (const item in error) {
            setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
          }
        }
      }, [error]);

    useEffect(() => {
        if (data) {
            navigate("../login", { replace: true });
        }
        }, [data]);




    const form = {
        "username": username,
        "email": email,
       "password": password,
    }



    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const formValid = !email?.length || !username?.length || !password?.length 

    const onSubmit = () => {
        setFieldErrors({});
        register(form)(authDispatch);
      };

  
    async function handleSubmit(e){
        e.preventDefault();
    }
 

    return (
        <div className='gradient-bg'>
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
                        value={username|| ""}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        autoComplete="username"
                        autoFocus
                    />
                    <Typography variant="caption" color='error.main' display="block" gutterBottom>
                        {fieldErrors.username}
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email|| ""}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}

                        autoComplete="email"
                        autoFocus
                    />
                    <Typography variant="caption" color='error.main' display="block" gutterBottom>
                        {fieldErrors.email}
                    </Typography>
                    

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
                        InputProps={{ 
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
                    <Typography variant="caption" color='error.main' display="block" gutterBottom>
                        {fieldErrors.password}
                    </Typography>
  
                    <Button 
                         
                        onClick={onSubmit}
                        disabled={formValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ color: '#FFFFFF'}}
                        sx={{ mt: 7, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container sx={{mt: 5}}>
                        <Grid item xs >
                        <Link href={"/"} variant="caption" color='textBottom.main'>
                            Home
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={"/login"} variant="caption" color='textBottom.main'>
                            {"Already Have an Account? Sign In!"}
                        </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                </Container>
            </ThemeProvider>
        </div>

    )};

export default RegisterPage;