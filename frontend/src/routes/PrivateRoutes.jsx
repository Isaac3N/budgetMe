import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = localStorage.token
    if (!auth){
       return(<Navigate to="/login"/>) 
    }else {
        return(<Outlet/>)
    }
    
}

export default PrivateRoutes