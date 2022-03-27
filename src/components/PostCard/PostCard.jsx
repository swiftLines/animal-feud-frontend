import { Link } from 'react-router-dom'

function PostCard({post}) {
  return(
    <Link to="/thread">
    <div className="card">
      <h2>{post.content}</h2>
      <p>{post.owner}</p>
      <footer>{post.createdAt}</footer>
    </div>
    </Link>
  )
}

export default PostCard