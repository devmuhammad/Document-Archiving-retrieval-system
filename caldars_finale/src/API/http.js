import axios from 'axios'
const production_url = 'localhost:9585/cabsoldarapi/v1/documents'
const newAPI  = 'localhost:9585/cabsoldars/api/v1'

export const HTTP = axios.create({
  baseURL: production_url,
  headers: { Authorization: 'Bearer {token}'}
})

export const userHTTP = axios.create({
  baseURL: newAPI,
  headers: { Authorization: 'Bearer {token}'}
})
