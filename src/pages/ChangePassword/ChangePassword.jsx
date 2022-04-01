import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';


const ChangePassword = props => {
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
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >
      <h1>Change Password</h1>
       </Paper>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </Box>
    </>
  )
}

export default ChangePassword
