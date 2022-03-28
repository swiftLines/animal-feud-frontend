import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/feed')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
<>
  <Box
  display="flex" 
  justifyContent="center" 
  alignItems="center"
  sx={{ width: "70%" }}
  >
  <Paper 
  elevation={4} sx={{ width: "100%", p: "1rem" }}
  >
    <form 
    autoComplete='off'
    onSubmit={handleSubmit}
    >
      <TextField
          margin="normal"
          fullWidth
          required
        type="text"
        autoComplete='off'
        label="Email"
        id="email"
        value={formData.email}
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
        value={formData.pw}
        name="pw"
        onChange={handleChange}
      />
      <Button type="submit"> Submit </Button>
    </form>
  </Paper>
  </Box>
</>

  )
}

export default LoginForm
