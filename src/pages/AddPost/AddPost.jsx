import { useState, useRef, useEffect, } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '@mui/material/Button';
import styles from './AddPost.module.css'
import { Paper } from "@mui/material";


const AddPost = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
  })

  useEffect(() => {
    formElement.current.checkValidity()  ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    const postFormData = new FormData()
    postFormData.append('photo', formData.photo)
    postFormData.append('content', formData.content)
    props.handleAddPost(postFormData)
  }

  const handleChangePhoto = (evt) => {
    setFormData({...formData, photo: evt.target.files[0]})
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
          elevation={4} sx={{ width: "100%", height: "2ewjf0vh", p: "1rem"}}
          >
          <h1>Join The Conversation</h1>
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
          <PhotoCamera fontSize="large" />
        </IconButton>
      </label>
      <input
        // sx={{m: ".5rem", width:"80%" }}
        type="file"
        className="form-control"
        id="photo-upload"
        name="photo"
        onChange={handleChangePhoto}
        />
      <Button 
        sx={{m: ".5rem", width:"50%" }}
        variant="contained"
        type="submit"
        disabled={!validForm}
      > 
        Add Post
      </Button>
      </Paper>
    </Box>
      <h4>Add your evidence:</h4>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div>
          <input type="text" 
          name="source"
          id="source-input"
          value={formData.source}
          onChange={handleChange}
          />
          <textarea
          type="text" 
          name="notes"
          id="notes-input" 
          cols="30" rows="10"
          value={formData.notes}
          onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default AddPost;