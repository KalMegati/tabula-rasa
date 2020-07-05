const origStore = { users: [], characters: [], loading: false, style: "journal"}

export default function root(state = origStore, action) {

    switch(action.type) {
      
      case 'SELECT_STYLE':
        return {
          ...state,
          style: action.style
        }

      case 'LOAD_USERS':
        return {
          ...state,
          users: [...state.users],
          loading: true
        }

      case 'ADD_USERS':
        return {
          ...state, 
          users: action.users,
          loading: false
        }

      default:
        // let enter = e => e.target.classList.add("white-text")
        // let leave = e => e.target.classList.remove("white-text")
        // return {
        //   ...state, 
        //   mouseEnter: enter,
        //   mouseLeave: leave
        // }
        return state
    }
  
}