import { useState, useRef, useEffect, } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
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
    props.handleAddPost(formData)
  }

  return (
    <>
          <h1>AddPost</h1>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        ref={formElement} onSubmit={handleSubmit} autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "2ewjf0vh", p: "1rem"}}
        >
      <TextField 
        sx={{p: ".5rem", }}
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
      
      <Button 
      variant="contained"
      type="submit"
      disabled={!validForm}
      >
        Add Post
      </Button>
      </Paper>
    </Box>
  
    </>
  );
}

export default AddPost;