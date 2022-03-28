import styles from './Landing.module.css'
// import { SketchPicker } from 'react-color'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

const Landing = ({ user }) => {
  const intro = {
    backgroundColor: "Black",
    height: "40vh",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  
  }
  const start = {
    backgroundColor: " rgb(26, 190, 182);",
    height: "60vh",
    width: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }

  return (
    <main>
      <section style={intro}>
        <Box
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            textAlign="center"
            fontSize="15px"
            sx={{ width: "50%" }}
        >
          <Paper>

            <h1>Animal Feud</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod ut possimus obcaecati odit suscipit quibusdam praesentium nulla sapiente, sit id reiciendis nihil nam, cupiditate aliquid numquam veritatis, maiores consequatur!</h3>
          </Paper>

        </Box>
      </section>
      <section style={start}>
        <h1>Join The Fued Today!</h1>
        <Box
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          sx={{ width: "50%" }}
        >
            <Paper 
      elevation={4} sx={{ width: "100%", height: "20vh", p: "2rem"}}
      >
        <Button href="/login" variant="contained" size='large' sx={{ width: "100%", p: "1rem", m: ".5rem"}}>Login</Button>
        <Button href="/signup" variant="outlined" size='large' sx={{ width: "100%", p: "1rem", m: ".5rem"}}>Sign Up</Button>
        </Paper>
        </Box>
      </section>
    </main>

  )
}

export default Landing
