
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


function PostCard({post, user, handleDeletePost}) {
  return(
    <Card sx={{ width: 700, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.owner.name} posted at {post.createdAt}
        </Typography>
        <Typography variant="h5" component="div">
        <Link to="/thread">
          <h2>{post.content}</h2>
        </Link>
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button
        onClick={()=> handleDeletePost(post._id)}
        >
          delete
        </button>

      </CardContent>
    </Card>
  )
}
          


export default PostCard