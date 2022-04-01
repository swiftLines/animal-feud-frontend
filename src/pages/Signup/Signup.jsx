import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Paper } from "@mui/material"
import Box from '@mui/material/Box';



const Signup = props => {
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
        <div>
          <h1>Join Animal Feud</h1>
        </div>
       </Paper>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
      </Box>
    </>
  )
}

export default Signup
