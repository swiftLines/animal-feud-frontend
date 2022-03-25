import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import AddPost from './pages/AddPost/AddPost'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'

const App = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleAddPost = newPostData => {
    setPosts([...posts, newPostData])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
        <Route
            path='/add'
            element={
              <AddPost 
                handleAddPost={handleAddPost}
              />
            }
        />
          <Route 
            path="/" 
            element={
              <Landing 
                user={user}
                posts={posts}  
              />
            } 
          />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/profiles"
            element={user ? <Profiles /> : <Navigate to="/login" />}
          />
          <Route
            path="/changePassword"
            element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
