import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Login from './Pages/LoginForm/Login';
const ProtectedRoute = () => {
    const isLoggedIn=localStorage.getItem('isLoggedIn');
    const userLogin = useSelector(state => state.userLogin);
    const { loggedIn } = userLogin;
    
    return isLoggedIn ? <Outlet /> : <Login />
}

export default ProtectedRoute