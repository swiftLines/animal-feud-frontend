import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/comments`

async function create(comment){
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(comment)
  })
  const data = await res.json()
  console.log(data)
  return data
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