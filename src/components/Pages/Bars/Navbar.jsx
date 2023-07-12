import React, { useEffect, useState } from 'react'
import './css/navbar.css'
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../Action/userRegister';

const Navbar = () => {
    const [isOpenLogout,setIsOpenLogout]=useState(false);
    const dispatch=useDispatch();
  const getUsers = useSelector(state => state.getUser);
  const {users}=getUsers;

  useEffect(()=>{
    dispatch(getUserAuth());
  },[])
    const handelLogout=()=>{
        setIsOpenLogout(isOpenLogout ? false :true);
    }
    return (
        <div className='containerNav'>
            <div>
                <p className='text-2xl text-white'>ZAD</p>
            </div>
            <div className='text-white text-xl tracking-wider  cursor-pointer' onClick={handelLogout} >
                <div className='flex gap-3 items-center'>
                    <p>{users.fullname}</p>
                    <div><IoMdArrowDropdown /></div>
                </div>
                <div className={isOpenLogout ? 'bg-white hover:bg-gray-100 duration-500 rounded-lg shadow-lg text-black py-3 right-1 top-20 px-4 absolute  w-52  flex items-center gap-4' : 'bg-white hover:bg-gray-100 duration-500 rounded-lg shadow-lg text-black py-3 -top-96 right-1  px-4 absolute -ml-4 w-52  flex items-center gap-4'}>
                    <p>Logout</p>
                    <div className='rotate-180'><BiLogOut /></div>
                </div>
            </div>

        </div>

    )
}

export default Navbar