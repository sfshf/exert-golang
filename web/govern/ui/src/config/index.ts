const config = {
  apiBaseURL: () => {
    if (import.meta.env.DEV) {
      import.meta.env.VITE_APP_API_HOST = '127.0.0.1'
      import.meta.env.VITE_APP_API_PORT = '8000'
      import.meta.env.VITE_APP_API_BASE_URL = 'http://'+import.meta.env.VITE_APP_API_HOST+':'+import.meta.env.VITE_APP_API_PORT+'/api/v1'
      return import.meta.env.VITE_APP_API_BASE_URL
    } else if (import.meta.env.PROD) {
      import.meta.env.VITE_APP_API_HOST = '172.168.1.53'
      import.meta.env.VITE_APP_API_PORT = '8000'
      import.meta.env.VITE_APP_API_BASE_URL = 'http://'+import.meta.env.VITE_APP_API_HOST+':'+import.meta.env.VITE_APP_API_PORT+'/api/v1'
      return import.meta.env.VITE_APP_API_BASE_URL
    }
    return import.meta.env.VITE_APP_API_BASE_URL
  }
}

export default config
