import PostCard from "../../components/PostCard/PostCard";
import { Link } from 'react-router-dom'
import * as React from 'react';
import styles from './PostList.module.css'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


const PostList = (props) => {
  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
  return (
    <main className={styles.container}>
      <h1>Post Feed</h1>
        {props.posts.map(post => (
          <PostCard
          key={post._id}
          post={post}
          handleDeletePost={props.handleDeletePost}
          handleGetThread={props.handleGetThread}
          />

        ))}

      <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add">
            <Link to="/add">
              <Tooltip title="Create Post">
              <AddIcon />
              </Tooltip>
            </Link>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </main>
            
  );
}

export default PostList;