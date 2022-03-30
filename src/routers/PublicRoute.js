import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { LoginScreen } from "../components/login/LoginScreen"


export const PublicRoute = () => {

    const {user} = useContext(AuthContext)


  return user.logged===false ? <LoginScreen/> : <Navigate to="/"/>

}
