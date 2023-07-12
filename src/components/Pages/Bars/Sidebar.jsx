import React, { useEffect, useState } from 'react'
import './css/sidebar.css'
import { NavLink, Navigate, useLocation } from 'react-router-dom'
import { MdAccountBalance, MdDashboard, MdOutlinePersonalInjury } from 'react-icons/md';
import { AiOutlineAlignRight, AiOutlineUser } from 'react-icons/ai';

import Logo from '../../Image/Logo.jpg'
import { BiSolidUserDetail } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../Action/userRegister';



const Sidebar = () => {
    const [isOpenSidBar, setIsOpenSidBar] = useState(false);
    const dispatch = useDispatch();
    const getUsers = useSelector(state => state.getUser);
    const { users } = getUsers;


    useEffect(() => {
        dispatch(getUserAuth());
    }, [])
    const location = useLocation();
    const { pathname } = location;

    const handelSideBar = () => {
        setIsOpenSidBar(
            isOpenSidBar ? false : true
        )
    }
    return (


        <div className={pathname == '/' ? 'hidden' : 'block'}>
            <div className={isOpenSidBar ? ' container xl:w-56' : 'closeContainer '}>

                <div className='headSidebar'>
                    <div className={isOpenSidBar ? "duration-500 w-20" : "duration-500 opacity-0 w-16"}><img src={Logo} /></div>
                    <div className={isOpenSidBar ? 'cursor-pointer duration-500' : 'cursor-pointer duration-500 absolute rotate-180'} onClick={handelSideBar}><AiOutlineAlignRight /></div>
                </div>
                <hr />

                <nav className={'nav'}>

                    <NavLink to={'/'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                        <div> <MdDashboard />  </div>
                        <span className={isOpenSidBar ? '' : 'hidden'}>Dashboard</span>
                    </NavLink>
                    {/* end */}

                    <NavLink to={'/user'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                        <div> <AiOutlineUser />  </div>
                        <span className={isOpenSidBar ? '' : 'hidden'}>User</span>
                    </NavLink>
                    {/* end */}


                    {
                        users.section_id == 1 ?
                            <NavLink to={'/Administrator'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                                <div> <BiSolidUserDetail />  </div>
                                <span className={isOpenSidBar ? '' : 'hidden'}>Administration</span>
                            </NavLink>
                            : users.section_id == 2 ? <NavLink to={'/accoutning'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                                <div> <MdAccountBalance />  </div>
                                <span className={isOpenSidBar ? '' : 'hidden'}>Accounting</span>
                            </NavLink> : users.section_id == 3 ?
                                <NavLink to={'/development'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                                    <div> <BiSolidUserDetail />  </div>
                                    <span className={isOpenSidBar ? '' : 'hidden'}>Development</span>
                                </NavLink> : ''
                    }
                    {
                        users.section_id == 5 ? <NavLink to={'/invoice'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                            <div> <MdOutlinePersonalInjury />  </div>
                            <span className={isOpenSidBar ? '' : 'hidden'}>Patient</span>
                        </NavLink> : <Navigate to={'/'} />
                    }

                    {
                        users.section_id == 5 ? <NavLink to={'/commite'} className={({ isActive }) => isActive ? "navListActive" : "nav_list "}>
                            <div> <HiUserGroup />  </div>
                            <span className={isOpenSidBar ? '' : 'hidden'}>Patient</span>
                        </NavLink> : <Navigate to={'/'} />
                    }

                </nav>

            </div>
        </div>


    )
}

export default Sidebar