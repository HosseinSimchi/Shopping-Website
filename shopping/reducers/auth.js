const auth = (state=[], action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ... state,
        name : action.name,
        family : action.family,
        email : action.email,
        loading : action.loading,
      }
    default:
      return state
  }
}

export default auth;





