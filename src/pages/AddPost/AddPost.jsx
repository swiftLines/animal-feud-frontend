import { useState, useRef, useEffect, } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const AddPost = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    const postFormData = new FormData()
    postFormData.append('content', formData.content)
    props.handleAddPost(postFormData)
  }

  return (
    <>
      <h1>AddPost</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <input
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
          Submit
        </button>
      </form>
    </>
  );
}

export default AddPost;