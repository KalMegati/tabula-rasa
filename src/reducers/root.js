const origStore = { users: [], characters: [], loading: false, user_id: localStorage.user_id, style: localStorage.style}

export default function root(state = origStore, action) {

    switch(action.type) {
      
      case 'SELECT_STYLE':
        localStorage.setItem("style", action.style)
        return {
          ...state,
          style: action.style
        }

      case 'LOADING':
        return {
          ...state,
          loading: true
        }

      case 'LOGIN_USER':
        localStorage.setItem("user_id", action.user.id)
        localStorage.setItem("style", action.user.style)
        return {
          ...state,
          user_id: action.user.id,
          style: action.user.style
        }

      case 'LOGOUT_USER':
        localStorage.clear()
        return {
          ...state,
          user_id: undefined,
          style: localStorage.style
        }

      case 'CREATE_USER':
        console.log(action.user)
        return {
          ...state,
          users: [...state.users, action.user],
          loading: false
        }

      case 'UPDATE_USER':
        localStorage.setItem("user_id", action.user.id)
        localStorage.setItem("style", action.user.style)
        return {
          ...state,
          user_id: action.user.id,
          style: action.user.style,
          loading: false
        }

      case 'ADD_USERS':
        return {
          ...state, 
          users: action.users,
          loading: false
        }

      default:
        return state
    }
  
}