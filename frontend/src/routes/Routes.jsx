import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const router = createBrowserRouter([
   
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: '/',
            element: <PrivateRoute><HomePage></HomePage></PrivateRoute>
        },
        {
            path: '/signup',
            element: <PublicRoute><SignupPage></SignupPage></PublicRoute> 
        },
        {
            path: '/login',
            element:<PublicRoute><LoginPage></LoginPage></PublicRoute> 
        },
        {
            path: '/settings',
            element: <SettingsPage></SettingsPage>
        },
        {
            path: '/profile',
            element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
        },
    ]
  },
]);