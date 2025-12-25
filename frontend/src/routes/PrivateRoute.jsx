import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader } from "lucide-react";


const PrivateRoute = ({children}) => {
     const {authUser, isCheckingAuth} = useAuthStore()
      if(isCheckingAuth && !authUser){
        return (
            <div className='flex justify-center items-center h-screen'>
                <Loader className='size-10 animate-spin'/>
            </div>
        )
    }
    return authUser ? children  : <Navigate to='/login'></Navigate>
};

export default PrivateRoute;