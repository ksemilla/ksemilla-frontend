let backendHost = ''

const hostname = window && window.location && window.location.hostname

if (hostname === 'ksemilla.com') {
  backendHost = 'https://go.ksemilla.com'
} else {
  backendHost = 'http://localhost:8080'
}

export const API_URL = backendHost

export const getAPIUrl = () => {
  return API_URL
}