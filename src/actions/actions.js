
export const updateUser = (user, user_id) => {
  return (dispatch) => {
    console.log(user)
    console.log(user_id)
    dispatch({ type: 'LOADING'})
    fetch(`http://localhost:3001/api/users/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'UPDATE_USER', user: responseJSON})
    })
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch('http://localhost:3001/api/users').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_USERS', users: responseJSON})
    })
  }
}

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch('http://localhost:3001/api/sessions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'LOGIN_USER', user: responseJSON})
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT_USER'})
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch('http://localhost:3001/api/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'CREATE_USER', user: responseJSON})
    })
  }
}