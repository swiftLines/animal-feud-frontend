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


function getThread(post) {
  console.log(post._id)
  return fetch(`${BASE_URL}/${post._id}`, {
    method: 'GET',
    headers: {
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

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function update(post) {
  return fetch(`${BASE_URL}/${post._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: post
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  getThread,
  deleteOne,
  update
}
