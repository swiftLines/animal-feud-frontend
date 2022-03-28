import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import AddPost from './pages/AddPost/AddPost'
import PostList from './pages/PostList/PostList'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import PostThread from './pages/PostThread/PostThread'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as commentService from './services/commentService'


const App = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

useEffect (() => {
  postService.getAll()
  .then(allPosts => setPosts(allPosts))
}, [])

  const handleAddPost = async newPostData => {
    const newPost = await postService.create(newPostData)
    setPosts([...posts, newPost])
    navigate('/feed')
  }
  console.log(posts)

  const handleDeletePost = id => {
    
    postService.deleteOne(id)
    .then(deletedPost => setPosts(posts.filter(post => post._id !== id)))
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
            path='/thread'
            element={
              <PostThread 
                
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
            path='/feed'
            element={
              user ?
              <PostList
                posts={posts} 
                handleDeletePost={handleDeletePost}
                user={user} 
              />
              :
              <Navigate to='/login' />
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
