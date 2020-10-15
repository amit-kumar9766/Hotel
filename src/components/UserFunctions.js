import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    
}

export const login = user => {
  return axios
    .post('http://localhost:5000/login', {
      email: user.email,
      password: user.password
    })
  }

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}