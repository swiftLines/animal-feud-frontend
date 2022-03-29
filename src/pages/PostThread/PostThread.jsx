import { getAutoHeightDuration } from '@mui/material/styles/createTransitions'
import {useState, useRef, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getThread } from '../../services/postService'

const PostThread = (props) => {
  const location = useLocation()
  const [postThread, setPostThread] = useState({})
  let params = useParams()
  console.log(params)
  
  useEffect(() => {
    getThread(params.threadId)
    .then(postThread => setPostThread(postThread))
  },[])

return(<>
  <div>
    <h1>Post Thread</h1>
    <h2> {postThread.content} </h2>
  </div>
</>)
}

export default PostThread;