import { useState } from "react"

const AddPost = (props) => {
  const [formData, setFormData] = useState({
    owner: '',
    content: ''
  })
  return ( 
    <>
      <h1>AddPost</h1>
      <form>
        Form
      </form>
    </>
  );
}
 
export default AddPost;