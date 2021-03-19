export default function login(dispatch, name){
    dispatch({ type: "login", payLoad: name })
}