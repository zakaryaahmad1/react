import React, {  useState } from 'react';
import './css/login.css'
import { useDispatch } from 'react-redux';

import { login } from '../../Action/login';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const dispatch=useDispatch();
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const navigate=useNavigate();
    const handelSubmit=(event)=>{
        event.preventDefault();
        dispatch(login(email,password));
        navigate('/');
    }
  return (
    <div>
        <form action="" className='formLogin' >
            
            <div className='childLogin'>
                <h1 className='headLogin'>Login Form</h1>
                <label htmlFor="email" className='ml-6 pb-2'>Email * </label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} id='email' className='inputLogin' placeholder='Email' />
            </div>
            <div className='childLogin mt-4'>
                <label htmlFor="pass" className='ml-6 pb-2'>Password * </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id='pass' className='inputLogin' placeholder='Password' />
            </div>

            <div className='parentBtn'>
                <input type="submit" onClick={handelSubmit} className='btnLogin bg-indigo-600' value={"Login"}  />
            </div>
        </form>
    </div>
  )
}

export default Login