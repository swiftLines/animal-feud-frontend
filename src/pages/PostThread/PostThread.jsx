import { getAutoHeightDuration } from '@mui/material/styles/createTransitions'
import {useState, useRef, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getThread } from '../../services/postService'

const PostThread = (props) => {
  const [postThread, setPostThread] = useState({})
  const params = useParams()
  // console.log(params)
  
  useEffect(() => {
    getThread(params.postId)
    .then(postThread => setPostThread(postThread))
  },[])

return(<>
  <div>
    <h1>Post Thread</h1>
    <h4>{postThread.owner?.name}</h4>
    <h2> {postThread.content} </h2>
    <footer>{postThread.createdAt}</footer>
  </div>
</>)
}

export default PostThread;