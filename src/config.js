import { browser, dev } from "$app/env"

let backendHost = ''

if (!dev) {
  backendHost = 'https://go.ksemilla.com'
} else {
  backendHost = 'http://localhost:8080'
}

export const API_URL = backendHost