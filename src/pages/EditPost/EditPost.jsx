import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '@mui/material/Button';


const EditPost = (props) => {
  const location = useLocation()
  const formElement = useRef()
  const [formData, setFormData] = useState(location.state.post)
  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
   }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePost(formData)
  }

  return ( 
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >
          <h1>Edit Post</h1>
       </Paper>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch', height: '35ch' },
        }}
        ref={formElement} onSubmit={handleSubmit} autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "20vh", p: "1rem"}}
        >
      <TextField 
        sx={{p: ".5rem", width:"100%" }}
        label="Add post here"
        variant="outlined" size="large" 
        type="text"
        name="content"
        multiline
        rows={4}
        id="post-content" 
        value={formData.content}
        onChange={handleChange}
        required
        />
        
      <label htmlFor="icon-button-photo">
        <IconButton color="primary" component="span">
          <PhotoCamera 
          fontSize="large"
          />
        </IconButton>
      </label>
      <input
        // sx={{m: ".5rem", width:"80%" }}
        type="file"
        className="form-control"
        id="photo-upload"
        name="photo"
        // onChange={handleChangePhoto}
        />
         
      <Button 
        sx={{m: ".5rem", width:"30%" }}
        variant="contained"
        type="submit"
        disabled={!validForm}
      > 
        Update
      </Button>
      </Paper>
    </Box>
    {/* <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="content"
        id="post-content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        disabled={!validForm}
      >
        Save Post
      </button>
      <div className="d-grid">
					<Link
						to="/feed"  //maybe /thread in future or both?
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
    </form> */}
  </>
  );
}
 
export default EditPost;