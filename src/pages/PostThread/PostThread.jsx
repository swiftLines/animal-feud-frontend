import { getAutoHeightDuration } from '@mui/material/styles/createTransitions'
import {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getThread } from '../../services/postService'
import EvidenceCard from '../../components/EvidenceCard/EvidenceCard'


const PostThread = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    source: '',
    notes: '',
  })

 
  const [postThread, setPostThread] = useState({})
  const params = useParams()
  
  useEffect(() => {
    getThread(params.postId)
    .then(postThread => setPostThread(postThread))
  },[])

    useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

    const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

    const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddEvidence(formData, postThread._id)
  }

return(<>

  <div>  
    <p><b>{postThread.owner?.name}</b> {postThread.createdAt}</p>
    <img
          component="img"
          height="300"
          src={postThread.photo}
          alt=''
        />
    <h2> {postThread.content} </h2>
  </div>

  <div>
    <h4>{postThread.owner?.name}'s evidence:</h4>
    {postThread.evidence?.map(post => (
    <EvidenceCard
    key={post._id}
    post={post}
    />
    ))}

  </div>

  <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
    <h4>Have evidence to support your statement? Provide it here!</h4>
            <div>
          <input type="text" 
          name="source"
          id="source-input"
          value={formData.evidence?.source}
          onChange={handleChange}
          
          />
          <br />
          <textarea
          type="text" 
          name="notes"
          id="notes-input" 
          cols="30" rows="10"
          value={formData.evidence?.notes}
          onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
  </form>

</>)
}

export default PostThread;