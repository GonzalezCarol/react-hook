export default function userReducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: { name: action.name } };
    default:
      return state;
  }
}
