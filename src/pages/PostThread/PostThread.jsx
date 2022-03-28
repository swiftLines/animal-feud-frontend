import {useState, useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getThread } from '../../services/postService'

function PostThread(props) {
  const location = useLocation()
  const [postThread, setPostThread] = useState({})

  useEffect(() => {
    getThread(location.state.postThread.url)
    .then(postThread => setPostThread(postThread))
  },[])
return(<>
  <div>
    <h2> {postThread.content} </h2>
  </div>
</>)
}

export default PostThread;