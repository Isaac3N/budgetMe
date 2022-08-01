
import { Outlet, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/base'
import isAuthenticated from '../utils/isAuthenticated'

const PrivateRoutes = () => {
    let auth = localStorage.token
    if (!auth){
       return(<Navigate to="/login"/>) 
    }else {
        return(<Outlet/>)
    }
    
}

export default PrivateRoutes