import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/comments`

function create(comment){
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`},
    body: JSON.stringify(comment)
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

export {
  create,
  getAll,
}