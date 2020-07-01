export default function root(state = [], action) {

    switch(action.type) {
  
      case 'PYLONS':
        return state
  
      default:
        let enter = e => e.target.classList.add("white-text")
        let leave = e => e.target.classList.remove("white-text")
        return {
            mouseEnter: enter,
            mouseLeave: leave
        }
    }
  
}