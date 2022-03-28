import { useState, useRef, useEffect, } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './AddPost.module.css'


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
        <div className={styles.container}>
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
      <TextField 
        label="Add post here"
        variant="outlined" size="large" 
        type="text"
        name="content"
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
    </Box>
        </div>
    </>
  );
}

export default AddPost;