import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { PublicRoute } from "./PublicRoute"


export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    localStorage.setItem('lastPath', location.pathname)


  return user.logged 
    ? children 
    : <PublicRoute/>
}
