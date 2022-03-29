import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { PropaneSharp } from '@mui/icons-material';

function PostCard({ post, user, handleDeletePost, handleAddComment }) {
  const url = '/thread/' + post._id
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  // console.log(formElement)

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddComment(formData)
  }

  return (
    <Card sx={{ width: .9, m: 1, height: "100%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.owner.name} posted at {post.createdAt}
        </Typography>
        <Typography variant="h5" component="div">
          <Link
            to={url}>
            <h2>{post.content}</h2>
          </Link>
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          ria-label="delete"
          onClick={() => handleDeletePost(post._id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <Link
            to='/edit'
            state={{ post }}
          >
            <EditIcon />
          </Link>
        </IconButton>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
          <label htmlFor="comment-input"></label>
          <input
            type='text'
            id='comment-input'
            name='comment'
            placeholder='Leave Comment'
            value={formData.content}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            disabled={!validForm}
          >
            Add Comment
          </button>
        </form>
        
      </CardContent>
    </Card>
  )
}




export default PostCard