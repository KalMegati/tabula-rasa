export default function root(state = { users: [], characters: [], loading: false}, action) {

    switch(action.type) {
  
      case 'LOAD_USERS':
        console.log("LOAD")
        return {
          ...state,
          users: [...state.users],
          loading: true
        }

      case 'ADD_USERS':
        console.log(action.users)
        return {
          ...state, 
          users: action.users,
          loading: false
        }

      default:
        let enter = e => e.target.classList.add("white-text")
        let leave = e => e.target.classList.remove("white-text")
        return {
          ...state, 
          mouseEnter: enter,
          mouseLeave: leave
        }
    }
  
}