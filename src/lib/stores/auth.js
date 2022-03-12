import { writable } from "svelte/store";
import { goto } from "$app/navigation"

export const isLogged = writable(false)
export const user = writable({})

export const logUserOut = () => {
  isLogged.update(() => false)
  user.update(() => ({}))
  localStorage.removeItem('token')
  goto("/")
}