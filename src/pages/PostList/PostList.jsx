const PostList = (props) => {
  return (
    <>
      <h1>Post Thread</h1>
      <div>
        {props.posts.map(post => (
          <div key={post._id}>
            <p>props.post.content</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;