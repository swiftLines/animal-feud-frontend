import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'


const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <>
    <Box
     display="flex" 
     justifyContent="center" 
     alignItems="center"
     sx={{ width: "50%" }}
    >
      <Paper 
      elevation={4} sx={{ width: "100%", p: "1rem" }}
      >
        <form 
        onSubmit={handleSubmit}
        >
          <TextField
            autoComplete="off"
             margin="normal"
            fullWidth
            required
            label="Name"
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <TextField
             margin="normal"
             fullWidth
             required
            type="text"
            label="Email"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <TextField
           margin="normal"
           fullWidth
           required
           label="Password"
           type="password"
           id="password"
           value={password}
           name="password"
           onChange={handleChange}
          />
          <TextField
           margin="normal"
           fullWidth
           required
           label="Confirm Password"
           type="password"
           id="confirm"
           value={passwordConf}
           name="passwordConf"
           onChange={handleChange}
          />
          <Button type="submit" disabled={isFormInvalid()}> Submit </Button>
        </form>
      </Paper>
    </Box>

    </>

  )
}

export default SignupForm
