import { useState, useRef, useEffect, } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '@mui/material/Button';
import styles from './AddPost.module.css'
import { Paper } from "@mui/material";
import Divider from '@mui/material/Divider';

const AddPost = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    isFact: false,
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
    postFormData.append('isFact', formData.isFact)
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
          elevation={4} sx={{ width: "100%", height: "10vh"}}
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
  
          <label>
            <input 
              type="checkbox"
              name="isFact"
              value={formData.isFact ? "checked" : ""}
              onChange={handleChange}
            />
            Click to Add a Fact Post
          </label>
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
        onChange={handleChangePhoto}
        />
         
      <Button 
        sx={{m: ".5rem", width:"30%" }}
        variant="contained"
        type="submit"
        disabled={!validForm}
      > 
        Add Post
      </Button>
      </Paper>
    </Box>
    <Divider sx={{marginTop: "3rem"}}/>

    </>
  );
}

export default AddPost;