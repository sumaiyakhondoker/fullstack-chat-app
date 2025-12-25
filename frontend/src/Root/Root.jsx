
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
const Root = () => {

    const {authUser, checkAuth, onlineUsers} = useAuthStore()
    const {theme} = useThemeStore()
console.log({onlineUsers});

    useEffect(()=>{
        checkAuth()
    }, [checkAuth])

    console.log({authUser});

   
    return (
        <div data-theme={theme}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;