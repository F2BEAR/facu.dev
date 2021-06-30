import { TOGGLE_MENU, LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
  isOpen: false,
  isLogged: false,
  user: '',
  rol: '',
  userId: '',
  token: ''
}

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return { ...state, isOpen: !state.isOpen }
    }
    case LOGIN: {
      return {
        ...state,
        isLogged: true,
        user: action.payload[0],
        userId: action.payload[1],
        rol: action.payload[2],
        token: action.payload[3]
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isLogged: false,
        user: '',
        userId: '',
        rol: '',
        token: ''
      }
    }
    default:
      return state
  }
}
export default defaultReducer
