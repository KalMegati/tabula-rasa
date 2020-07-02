export const fetchUsers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOAD_USERS'})
      fetch('http://localhost:3001/api/users').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_USERS', users: responseJSON})
      })
    }
  }