import { getAutoHeightDuration } from '@mui/material/styles/createTransitions'
import {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getThread } from '../../services/postService'
import EvidenceCard from '../../components/EvidenceCard/EvidenceCard'
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import * as authService from '../../services/authService'


const PostThread = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [user, setUser] = useState(authService.getUser())
  const [formData, setFormData] = useState({
    source: '',
    notes: '',
  })

 
  const [postThread, setPostThread] = useState({})
  const params = useParams()
  
  useEffect(() => {
    getThread(params.postId)
    .then(postThread => setPostThread(postThread))
  },[])

    useEffect(()=> {
    formElement.current?.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

    const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

    const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddEvidence(formData, postThread._id)
  }
 
return(<>

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
          elevation={4} sx={{ width: "100%"}}
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
          <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '90%', marginTop:"3rem" },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >
          <h3>Have evidence to support your statement? Provide it here!</h3>

      </Paper>
      </Box>

      {user.profile === postThread.owner?._id ?

        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
          <TextField 
        sx={{p: ".5rem", width:"90%", marginTop:"1rem" }}
        label="Add Source"
        variant="outlined" size="large" 
        type="text"
        name="source"
        id="sorce-input" 
        value={formData.evidence?.source}
        onChange={handleChange}
        />
        <TextField 
        sx={{p: ".5rem", width:"90%", marginTop:".5rem" }}
        label="Add Notes"
        variant="outlined" size="large" 
        type="text"
        name="notes"
        multiline
        rows={4}
        id="notes-input" 
        value={formData.evidence?.notes}
        onChange={handleChange}
        />
        <Button type="submit"
        variant='contained'
        sx={{p: ".5rem", width:"85%",marginTop:".5rem"}}
        >
          Submit
        </Button>
        </form>
          :
          <></>
        }
          <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch', marginTop:"3rem"},
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >

          <h4>{postThread.owner?.name}'s evidence:</h4>
      </Paper>
      </Box>
      <div>
            
      {postThread.evidence?.map(post => (
      <EvidenceCard
      key={post._id}
      post={post}
      />
      ))}


      </div>
      </Paper>
      </Box>


</>)
}


export default PostThread;