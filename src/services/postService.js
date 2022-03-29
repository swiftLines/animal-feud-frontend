import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts`

// function create(post){
//   console.log(post)
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'Authorization' : `Bearer ${tokenService.getToken()}`
//     },
//     body: JSON.stringify(post)
//   })
//   .then(res => res.json)
// }
async function create(post){
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(post)
  })
  const data = await res.json()
  return data
}

async function createEvidence(post, evidence){
  console.log(`${BASE_URL}/${post._id}/${evidence}`)
  const res = await fetch(`${BASE_URL}/${post._id}/${evidence}`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(evidence)
  })
  const data = await res.json()
  return data
}


function getThread(post) {
  return fetch(`${BASE_URL}/${post}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    
  })
  .then(res => res.json())
}


function getAll(){
  return fetch(BASE_URL, {
    headers: {
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function update(post) {
  return fetch(`${BASE_URL}/${post._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
}


function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  getThread,
  deleteOne,
  update,
  createEvidence,
}
