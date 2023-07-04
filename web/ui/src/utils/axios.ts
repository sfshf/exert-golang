import axios from 'axios'
import config from '@/config/index'
import { isSignIn } from '@/apis'

// global axios defaults
axios.defaults.baseURL = config.apiBaseURL
// global axios intercepters
axios.interceptors.request.use((cfg) => {
  if (!isSignIn(cfg.url) && !cfg.headers.get('Authorization')) {
    cfg.headers.set('Authorization', localStorage.getItem('Authorization'))
  }
  return cfg
}, (err) => {
  return Promise.reject(err)
})
axios.interceptors.response.use((cfg) => {
  if (cfg.headers['authorization']) {
    localStorage.setItem('Authorization', cfg.headers['authorization'])
  }
  return cfg
}, (err) => {
  return Promise.reject(err)
})

export default axios
