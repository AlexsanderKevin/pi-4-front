import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
  const { loggedUser } = useContext(GlobalContext)

  return loggedUser ? children : <Navigate to="/" />
}

export default ProtectedRoute
