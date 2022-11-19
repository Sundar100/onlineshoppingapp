import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

const LoginPage = () => {

  const [isSignUp, setIsSignUp] = useState(false)

  const [isNotValid, setIsNotValid] = useState(false)

  const [message, setMessage] = useState('')

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    const currentState = e.currentTarget.id;
    console.log(inputs, currentState)
    if (currentState === "login") {
      AuthenticationService.loginCheck(inputs.email, inputs.password).then((response) => {
        console.log(response)
        if (response.data) {
          console.log("into the if statement")
          AuthenticationService.registerSuccessfulLogin(inputs.email, inputs.password);
          navigate('/products');
        }
      }).catch((response) => {
        if (response.response.status === 404 || response.response.status === 400) {
          setMessage('Invalid Credentials...')
          setIsNotValid(true);
          navigate('/login')
        }
      })
    }
    else {
      const user = {
        name: inputs.name,
        email: inputs.email,
        mobile: inputs.mobile,
        password: inputs.password
      }
      AuthenticationService.registerUser(user).then((response) => {
        if (response.status === 200) {
          setIsSignUp(false)
          setIsNotValid(false)
          alert("Registration Successful");
        }
      }).catch((response) => {
        console.log(response.response.status)
        if (response.response.status === 400) {
          setMessage('User with email exists...')
          setIsNotValid(true)
        }
      })
    }

  }

  const handleOnChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const reset = () => {
    setIsSignUp(!isSignUp)
    setInputs({
      name: '',
      mobile: '',
      email: '',
      password: ''
    })
  }

  return (
    <Box className='login-box'>
      <Typography variant='h5' padding={3} textAlign={'center'}>{isSignUp ? "Register" : "Login"}</Typography>

      <hr className='horizontal-line'/>

      {isNotValid && <div className='alert alert-warning'>{message}</div>}

      {isSignUp && <input className='login-box-input' name='name' onChange={handleOnChange} value={inputs.name} type={'text'} placeholder='Name' />}

      {isSignUp && <input className= 'login-box-input' name='mobile' onChange={handleOnChange} value={inputs.mobile}  type={'text'} placeholder='Mobile' />}

      <input className='login-box-input' name='email' onChange={handleOnChange} value={inputs.email} margin='normal' type={'email'} variant='outlined' placeholder='Email' />

      <input className='login-box-input' name='password' onChange={handleOnChange} value={inputs.password} margin='normal' type={'password'} variant='outlined' placeholder='Password' />

      <Link to={'/login'} > <span style={{ fontSize: '14px' }}>forget password?</span></Link>

      <Button id={isSignUp ? 'signup' : 'login'} onClick={handleSubmit} sx={{ marginTop: 3, borderRadius: 3 }} variant='contained' color='warning'>{isSignUp ? "SignUp" : "Login"}</Button>

      <Button
        onClick={reset}
        size={'small'}
        sx={{ marginTop: 3, borderRadius: 3 }}
      >
        {isSignUp ? "Login?" : "New user?"}
      </Button>
    </Box>
  )
}

export default LoginPage