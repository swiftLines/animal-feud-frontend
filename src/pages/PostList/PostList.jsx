import PostCard from "../../components/PostCard/PostCard";
import styles from './PostList.module.css'

const PostList = (props) => {

  return (
    <main className={styles.container}>
      <h1>Post Feed</h1>
        {props.posts.map(post => (
          <PostCard
          key={post._id}
          post={post}
          
          />

        ))}
    </main>
  );
}

export default PostList;