import PostCard from "../../components/PostCard/PostCard";

const PostList = (props) => {
  return (
    <>
      <h1>Post Feed</h1>
      <div>
        {props.posts.map(post => (
          <PostCard
          key={post._id}
          post={post}
          
          />

        ))}
      </div>
    </>
  );
}

export default PostList;