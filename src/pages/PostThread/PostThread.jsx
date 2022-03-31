import { getAutoHeightDuration } from '@mui/material/styles/createTransitions'
import {useState, useRef, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getThread } from '../../services/postService'
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";



const PostThread = (props) => {
  const location = useLocation()
  const [postThread, setPostThread] = useState({})
  const params = useParams()
  console.log(params)
  
  useEffect(() => {
    getThread(params.postId)
    .then(postThread => setPostThread(postThread))
    console.log(postThread)
  },[])

return(<>
  <div>
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >
          <h1>Post Thread</h1>
       </Paper>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "55vh"}}
          >
          <img
                style={{paddingTop:'2rem'}}
                component="img"
                height="300"
                src={postThread.photo}
                alt=''
              />
          <h2> {postThread.content} </h2>
          <footer>{postThread.createdAt}</footer>
       </Paper>
      </Box>
          
    {/* <h4>{postThread.owner.name}</h4> */}
  </div>
</>)
}
    

export default PostThread;