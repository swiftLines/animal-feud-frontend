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
function create(post){
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: post
  })
  .then(res => res.json())
}

function createEvidence(evidence, id){
  console.log(evidence)
  console.log(id)
  return fetch(`${BASE_URL}/${id}/evidence`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(evidence)
  })
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
