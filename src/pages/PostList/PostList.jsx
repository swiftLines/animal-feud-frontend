import PostCard from "../../components/PostCard/PostCard";
import { Link } from 'react-router-dom'
import * as React from 'react';
import styles from './PostList.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { Paper } from "@mui/material";


const PostList = (props) => {
  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  const style = {
    margin: 30,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};
  return (
    <main className={styles.container}>
      

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}autoComplete="off">
        <Paper
          elevation={4} sx={{ width: "100%", height: "10vh"}}
          >
          <h1>Post Feed</h1>
       </Paper>
      </Box>
        {props.posts.map(post => (
          <PostCard
          key={post._id}
          post={post}
          handleDeletePost={props.handleDeletePost}
          handleGetThread={props.handleGetThread}
          handleAddComment={props.handleAddComment}
          />

        ))}
      <Fab color="primary" aria-label="add" position="fixed"  style={style}>
        <Link to="/add">
          <Tooltip title="Create Post">
            <AddIcon fontSize="large"/>
          </Tooltip>
        </Link>
      </Fab>
    </main>
            
  );
}
    
      

export default PostList;