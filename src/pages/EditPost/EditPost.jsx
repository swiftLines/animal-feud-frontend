import { useState } from "react"
import { Link } from 'react-router-dom'

const EditPost = (props) => {
  return ( 
    <>
    <h1>Edit Post</h1>
    {/* <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}> */}
    <form autoComplete='off'>
      <textarea
        type="text"
        name="content"
        id="post-content"
        required
      />
      <button
        type="submit"
        // disabled={!validForm}
      >
        Save Post
      </button>
      <div className="d-grid">
					<Link
						to="/feed"  //maybe /thread in future or both?
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
    </form>
  </>
  );
}
 
export default EditPost;