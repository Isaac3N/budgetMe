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
import axiosInstance from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';





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

    const navigate = useNavigate()
    
    const authDispatch = useContext(GlobalContext)
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = (form)  => {
        axiosInstance
            .post("auth/login/", form)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                if (err.response) console.log(err.response.data);
            });
            
    };



    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const formValid = !username?.length || !password?.length 
    console.log([("username", username), ("password", password), ])

    const form = {
        "username": username,
        "password": password,
    }

    

    const onSubmit= () => {
        login(form)(authDispatch)

        
    }

    useEffect(()=>{
        login()
    }, [])



    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  

  
    async function handleSubmit(e){
        
        e.preventDefault();
        
      await setFormErrors(validate(form));
      setIsSubmit(true)
      
    
    
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(form);
        navigate("../login", {replace: true})
        
      }
    }, [formErrors]);
    
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
       } else if(values.email)

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters";
      } 
      return errors;
    };



  

    return (
        <div className='gradient-bg'>
            <ThemeProvider  theme={theme}>
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
                    Sign In
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
                        {formErrors.username}
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
                        {formErrors.password}
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
                        Sign In
                    </Button>
                    <Grid container sx={{mt: 5}}>
                        <Grid item xs >
                        <Link href={"/"} variant="caption" color='textBottom.main'>
                            Home
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={"/register"} variant="caption" color='textBottom.main'>
                            {"Do not have an Account? Sign Up!"}
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

export default LoginPage