import { useState, useRef, useEffect } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { Paper } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CommentIcon from '@mui/icons-material/Comment';
import AddPost from '../../pages/AddPost/AddPost';


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

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddComment(formData, post._id)
    setFormData({content:''})
  }

 
  return(
    
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch', },
      }}autoComplete="off">
     
      <Paper
        elevation={4} sx={{ width: "80%", minheight: "40vh"}}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom paddingTop='2rem'>
          {post.owner.name} posted at {post.createdAt}
        </Typography>
        <div>
        {post.isFact ?
          <h1>Opinion</h1>
        :
          <h1>Fact</h1>
        }
        </div>
        {post.photo ?
        <img
          component="img"
          height="140"
          src={post.photo}
          alt=''
        />
        :
        <></>
       }
        <Typography variant="h5" component="div">
            <h3>{post.content}</h3>
        </Typography>
        <Divider/>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            color='primary'
            fontSize="small" 
          />
          <p>Love</p>
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon 
            color='primary'
            fontSize="small" 
          />
            <p>Share</p>
        </IconButton> */}
        <IconButton aria-label="share">
          <VisibilityIcon 
            color='primary'
            fontSize="small" 
          />
            <Link
              to={url}
              state={{post}}
              style={{ textDecoration: 'none' }}>
                
                <p>View Thread</p>
            </Link>
        </IconButton>
        {/* {post.owner?._id === user.profile ?
        <> */}
        <IconButton>
          <EditIcon 
            color='primary' 
            fontSize="small" 
          />
          <Link
            to='/edit'
            state={{ post }}
            style={{ textDecoration: 'none' }}
          >
              <p>Edit</p>
          </Link>
        </IconButton>
        
        <IconButton
          ria-label="delete"
          onClick={() => handleDeletePost(post._id)}
        >
          <DeleteIcon 
            color='primary'
            fontSize="small" 
          />
            <p>Delete</p>
        </IconButton>
        {/* </>
          :
          <></>
        } */}
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}
        >
          <label htmlFor="comment-input"></label>
          <TextField
            sx={{m: ".5rem", width: '50ch', paddingBottom:'1rem'}}
              type='text'
              id='comment-input'
              name='content'
              placeholder='Leave Comment'
              value={formData.content}
              onChange={handleChange}
              required
          />
          <Button
            sx={{
              m: ".5rem", 
              width:"10%",
              height:"6vh",
            }}
            variant='contained'
            color='success'
            type='submit'
            disabled={!validForm}
            paddingBottom
          >
            Post
          </Button>
        </form>
        <div>
          <Divider />
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                  >
                    {post.comments.length > 0 ?
                      <IconButton>
                        <CommentIcon />
                        <p>{post.comments.length} </p>
                      </IconButton>
                    :
                     <IconButton>
                       <CommentIcon />
                       <p>0</p>
                     </IconButton>   
                    }
                    
                {/* <Typography>View Comments</Typography> */}
              </AccordionSummary>
              <AccordionDetails>
              
                {post.comments.length > 0 ?
                  post.comments.map(comment => (
                    <Box key={comment._id} sx={{ minWidth: 275, paddingBottom: "1rem"}}>
                      
                      
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h5" component="div">
                            <p>{comment.content}</p>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                      ))
                      :
                    <h4>No Comments</h4>
                    }
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Box>
    )
  }
                    
                   
                   
                              
          

              

           




export default PostCard