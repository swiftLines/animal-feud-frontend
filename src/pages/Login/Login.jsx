import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "2ewjf0vh", p: "1rem"}}
          >
      <h1>Log In</h1>
      <p>{message}</p>
         
       </Paper>
      </Box>
            <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "2ewjf0vh", p: "1rem"}}
          >

         
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
       </Paper>
      </Box>
    </>
  )
}

export default LoginPage
