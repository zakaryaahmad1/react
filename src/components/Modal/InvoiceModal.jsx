import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { createPatient, getPatient } from '../Action/patient';
import { useDispatch, useSelector } from 'react-redux';

const InvoiceModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const getUsers = useSelector(state => state.getUser);
    const getPatients = useSelector(state => state.getPatients);
  
    const { users } = getUsers;
    
  
    const [openSelect, setOpenSelect] = useState(false);
    const [gender, setGender] = useState(null);
    // const [isOpenModal, setIsOpenModal] = useState(false);
    useEffect(() => {
        // console.log(closeModal);
    }, []);
    const handelSelect = (e) => {
        e.preventDefault();
        setOpenSelect(
            openSelect ? false : true
        )
    }

    const [inputValue, setInputValue] = useState({
        fullName: '',
        phone: '',
        birth: ''
    });

    const handelInputChange = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const reset = () => {
        setInputValue('');
    }



    const handelPatient = (event) => {
        event.preventDefault();
        const { fullName, phone, birth } = inputValue;
        if (fullName == undefined || phone == undefined || birth == undefined || gender == undefined) {
            closeModal(true);
            dispatch(createPatient(fullName, phone, gender, birth, users.location_id, users.id, reset));
        }
        else {
            closeModal(false);

            dispatch(createPatient(fullName, phone, gender, birth, users.location_id, users.id, reset));
            dispatch(getPatient(users.location_id,0,10));
            setInputValue('');
        }

    }

    return (

        <div className={closeModal ? 'modalContainer' : 'closeModalContainer'} >

            <div className='modalChild'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl'>Patient Register</p>
                    </div>
                    <div className='text-3xl cursor-pointer text-red-600' onClick={() => closeModal(false)}>x</div>
                </div>
                {/* form */}
                <form action="" >
                    <div className='childForm flex gap-4 py-4 '>
                        <div className='w-full mt-2'>
                            <label htmlFor="name">fullName *</label>
                            <input type="text" name='fullName' onChange={handelInputChange} value={inputValue.fullName} id='name' className='inputLogin w-full ' placeholder='Full Name' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Phone Number *</label>
                            <input type="text" name='phone' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}
                    </div>
                    <div className='childForm flex gap-4'>
                        <div className='w-full mt-2'>

                            <div className='relative w-full '>
                                <div className='child '>
                                    <label htmlFor="gender">Gender * </label>
                                    <div onClick={handelSelect} className='select w-full focus:ring-2 ring-indigo-500 ml-0 '  >
                                        <p>{gender == "" || gender == null ? 'Select Gender .. ' : gender}</p>
                                        <div className={openSelect ? 'parentCaretDown' : 'duration-300'} >
                                            <AiFillCaretDown />
                                        </div>
                                    </div>
                                    {
                                        openSelect && <div className='parentOption absolute w-[49%] left-0 top-[4.5rem]'>
                                            <div onClick={() => {
                                                setOpenSelect(false)
                                                setGender('Male');
                                            }} className='option'>
                                                Male
                                            </div>

                                            <div className='option' onClick={() => {
                                                setOpenSelect(false)
                                                setGender('Female');
                                            }}>
                                                Female
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="name">Birth Date *</label>
                            <input type="date" onChange={handelInputChange} value={inputValue.birth} name='birth' className='inputLogin w-full' placeholder='any' />
                        </div>
                        {/* end parent Input & label */}
                    </div>
                    <div className=' mt-2 '>
                        <button className='btn' onClick={handelPatient}>Patient Register</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default InvoiceModal