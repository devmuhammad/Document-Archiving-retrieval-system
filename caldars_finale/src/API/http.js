import axios from 'axios'
const production_url = 'http://comsoftltd.net:8080/cabsoldarapi/v1/documents'

export const HTTP = axios.create({
  baseURL: production_url,
  headers: { Authorization: 'Bearer {token}'}
})
