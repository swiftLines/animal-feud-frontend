import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function PostCard({ post, user, handleDeletePost, handleAddComment }) {
  const url = '/thread/' + post._id
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
    comment: '',
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

  return(
    <Card sx={{ width: .9, maxWidth: 700, m: 1, height:"100%", borderColor:"tan", borderStyle:'solid'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.owner.name} posted at {post.createdAt}
        </Typography>
        {post.photo ?
        <img
          component="img"
          height="140"
          src={post.photo}
          alt=''
        />
        :
        <div></div>
       }


        <Typography variant="h5" component="div">
          <Link 
          to={url}
          state={{post}}>
            <h2>{post.content}</h2>
          </Link>
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" >
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
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}
        >
          <label htmlFor="comment-input"></label>
          <TextField
          sx={{m: ".5rem"}}
            type='text'
            fullWidth
            id='comment-input'
            name='comment'
            placeholder='Leave Comment'
            value={formData.comment}
            onChange={handleChange}
            required
          />
          <Button
            sx={{m: ".5rem", width:"30%" }}
            variant='contained'
            type='submit'
            disabled={!validForm}
          >
            Add Comment
          </Button>
        </form>
        
      </CardContent>
    </Card>
  )
}




export default PostCard