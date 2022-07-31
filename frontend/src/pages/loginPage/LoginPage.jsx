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

    let data = null;
    let error = null;
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = (form)  => {
        axiosInstance
            .post("auth/login/", form)
            .then((res, data) => {
                localStorage.token = res.data.token
                data =(res.data);
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

    useEffect(()=> {
      if(data){
        
      }
          
        
    }, [data])
  
    function handleSubmit(e){
        
        e.preventDefault();

        navigate("../", {replace: true})
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