import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import AddPost from './pages/AddPost/AddPost'
import PostList from './pages/PostList/PostList'
import EditPost from './pages/EditPost/EditPost'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import PostThread from './pages/PostThread/PostThread'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as commentService from './services/commentService'
import Drawer from './components/Drawer/Drawer'

const App = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

useEffect (() => {
  if(user) {
  postService.getAll()
  .then(allPosts => setPosts(allPosts))
  }
}, [user])

  const handleAddPost = async newPostData => {
    const newPost = await postService.create(newPostData)
    setPosts([...posts, newPost])
    navigate('/feed')
  }

  const handleAddEvidence = (evidenceData, id) => {
    postService.createEvidence(evidenceData, id)
    .then(newEvidence => setPosts(newEvidence))
  }

  const handleGetThread = id => {
    postService.getThread(id)
  }

  const handleDeletePost = id => {
    
    postService.deleteOne(id)
    setPosts(posts.filter(post => post._id !== id))
  }

  const handleUpdatePost = updatedPostData => {
    postService.update(updatedPostData)
    .then(updatedPost => {
    const newPostsArray = posts.map(post => 
      post._id === updatedPostData._id ? updatedPostData : post)
    setPosts(newPostsArray)
    navigate('/feed')
  })
  }

  const handleAddComment = async (newCommentData, postId) => {
    const newComment = await commentService.create(newCommentData, postId)
    setComments([...comments, newComment])
    navigate('/feed')
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
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <Drawer user={user} handleLogout={handleLogout} />
      
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
            path='/thread/:postId'
            element={
              <PostThread 
                handleGetThread={handleGetThread}
                handleAddEvidence={handleAddEvidence}
              />
            }
        />
          <Route 
            path="/" 
            element={
              <Landing 
                user={user}
                posts={posts}
                handleSignupOrLogin={handleSignupOrLogin}  
              />
            } 
          />
          <Route
            path='/feed'
            element={
              user ?
              <PostList
                posts={posts} 
                handleAddComment={handleAddComment}
                handleDeletePost={handleDeletePost}
                user={user} 
              />
              :
              <Navigate to='/login' />
            }
          />
          <Route
            path='/edit'
            element={
            <EditPost 
              handleUpdatePost={handleUpdatePost}
            />}
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
    
    </>
  )
}

export default App
