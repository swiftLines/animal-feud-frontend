import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

const EditPost = (props) => {
  const location = useLocation()
  const formElement = useRef()
  const [formData, setFormData] = useState(location.state.post)
  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
   }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePost(formData)
  }

  return ( 
    <>
    <h1>Edit Post</h1>
    <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="content"
        id="post-content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        disabled={!validForm}
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