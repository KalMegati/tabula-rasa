const origStore = { users: [], characters: [], loading: false, style: localStorage.style}

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

      case 'CREATE_USER':
        console.log(action.user)
        return {
          ...state,
          users: [...state.users, action.user],
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