const initState = {
    users: {}, 
    repos: {}
}

export default function calendar(state=initState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state.users = { "rene": { id: 1 }}
      case 'DECREMENT':
        return state.users = { "jhon": { id: 1 }}
      default:
        return state;
    }
  }