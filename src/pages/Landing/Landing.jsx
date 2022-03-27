import styles from './Landing.module.css'
// import { SketchPicker } from 'react-color'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Button } from '@mui/material'

const Landing = ({ user }) => {
  const intro = {
    backgroundColor: "Black",
    height: "100vh",
    width: "50%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
  }
  const start = {
    backgroundColor: "LightBlue",
    height: "100vh",
    width: "50%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <main>
      <section style={intro}>
        <h1>Animal Feud</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod ut possimus obcaecati odit suscipit quibusdam praesentium nulla sapiente, sit id reiciendis nihil nam, cupiditate aliquid numquam veritatis, maiores consequatur!</p>
      </section>
      <section style={start}>
        <Button href="/login" variant="contained" size='large'>Login</Button>
        <Button href="/signup" variant="outlined" size='large'>Sign Up</Button>
      </section>
    </main>

  )
}

export default Landing
