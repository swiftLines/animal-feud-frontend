import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import * as authService from '../../services/authService'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'


const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
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
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/feed')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <main className={styles.container}>
    <Box
    display="flex" 
    justifyContent="center" 
    alignItems="center"
    sx={{ width: "100%" }}
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
          type="password"
          autoComplete='off'
          label="Current Password"
          id="password"
          value={pw}
          name="pw"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          autoComplete="off"
          label="New Password"
          type="password"
          id="newPassword"
          value={newPw}
          name="newPw"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          autoComplete="off"
          label="Confirm New Password"
          type="password"
          id="newPasswordConf"
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
        />
        <Button type="submit"
        disabled={isFormInvalid()} 
        >
        Submit </Button>
      </form>
    </Paper>
    </Box>
    </main>
  )
}
        

export default ChangePasswordForm
