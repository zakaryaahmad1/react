import React from 'react'
import useFetchUsers from '../../Hooks/useFetchUsers'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { items } = useFetchUsers('loginForm/users');
    return (
        <div>
            <div className='flex  justify-between pt-4 items-center'>
                <div className='flex gap-2 text-xl items-center'>
                    <div><AiOutlineUserAdd className='text-teal-500' /></div>
                    <p className='font-bold'>User</p>
                </div>
                <div className='w-36'>
                    <Link to={'/add_user'}>
                        <button className='btnView'>Add User</button>
                    </Link>
                </div>
            </div>
            <table className='min-w-full bg-white mt-5 text-lg border-2 py-7'>
                <thead className='border-2'>
                    <tr>
                        <th>#</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Email</th>
                        <th>Rule</th>
                        <th>Location</th>
                        <th>phone</th>
                        
                    </tr>
                </thead>
                <tbody className='text-center py-4 border-2'>
                    {
                        items.map((item, index) => {
                            return (
                                <tr className='py-4' key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.admin_type}</td>
                                    <td>{item.location}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Profile