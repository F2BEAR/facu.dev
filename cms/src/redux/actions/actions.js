import { TOGGLE_MENU, LOGIN, LOGOUT } from './actionTypes'

export const toggleMenu = () => ({
  type: TOGGLE_MENU
})

export const login = (user, userId, rol, token) => ({
  type: LOGIN,
  payload: [user, userId, rol, token]
})

export const logout = () => ({
  type: LOGOUT
})
