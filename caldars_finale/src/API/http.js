import axios from 'axios'
const production_url = 'http://comsoftltd.net:9090/cabsoldarapi/v1/documents'
const newAPI  = 'http://comsoftltd.net:9090/cabsoldarapi/api/v1'

export const HTTP = axios.create({
  baseURL: production_url,
  headers: { Authorization: 'Bearer {token}'}
})

export const userHTTP = axios.create({
  baseURL: newAPI,
  headers: { Authorization: 'Bearer {token}'}
})
