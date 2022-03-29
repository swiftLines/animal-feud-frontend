
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
import CardMedia from '@mui/material/CardMedia';



function PostCard({post, user, handleDeletePost}) {
  const url = '/thread/'+post._id
  return(
    <Card sx={{ width: .9, maxWidth: 700, m: 1, height:"100%"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.owner.name} posted at {post.createdAt}
        </Typography>
        <img
          component="img"
          height="140"
          src={post.photo}
          alt=''
        />
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
            onClick={()=> handleDeletePost(post._id)}
            >
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <Link
            to='/edit'
            state={{post}}
            >
              <EditIcon/>
              </Link>
            </IconButton>
      </CardContent>
    </Card>
  )
}

          


export default PostCard