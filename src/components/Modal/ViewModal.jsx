import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { createCommiteSuli } from '../Action/commiteAction';


const ViewModal = ({ closeModal, locationId ,patientId }) => {
    const dispatch = useDispatch();

    const [openSelect, setOpenSelect] = useState(false);
    const [married, setMarried] = useState(null);
    
    useEffect(() => {
                
    }, []);
    const handelSelect = (e) => {
        e.preventDefault();
        setOpenSelect(
            openSelect ? false : true
        )
    }

    const [inputValue, setInputValue] = useState({
        occupation: '',
        nation: '',
        country: '',
        NoFamily: '',
        province: '',
        district: '',
        street: '',
        closetHome: '',
        secoundPhoneNo: '',
        card: '',
        smoke: ''
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
        const { occupation, nation, country, NoFamily, province, district, street, closetHome, scoundPhoneNo, card, smoke } = inputValue;
        
        if (occupation == undefined || nation == undefined
            || country == undefined || NoFamily == undefined
            || province == undefined || district == undefined
            || street == undefined || closetHome == undefined
            || scoundPhoneNo == undefined || married == undefined
            || card == undefined || smoke == undefined || married==undefined
        ) {
            closeModal(true);
            dispatch(createCommiteSuli(locationId ,patientId, occupation, nation,
                country,married, NoFamily, province, district, street
                , closetHome, scoundPhoneNo, card, smoke, reset));
            // dispatch(createPatient(occupation, nation, married, birth, users.location_id, users.id, reset));
        }
        else {
            closeModal(false);

            dispatch(createCommiteSuli(locationId ,patientId, occupation, nation,
                country,married, NoFamily, province, district, street
                , closetHome, scoundPhoneNo, card, smoke, reset));
            // dispatch(getPatient(users.location_id));
            // setInputValue('');
        }

    }

    return (

        <div className={closeModal ? 'modalContainerAssign w-10/12' : 'closeModalContainer'} >

            <div className='modalChildAssign '>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl'>Patient Information Form</p>
                    </div>
                    <div className='text-3xl cursor-pointer text-red-600' onClick={() => closeModal(false)}>x</div>
                </div>
                {/* form */}
                <form action="" >
                    <div className='childForm flex gap-4 py-4 '>
                        <div className='w-full mt-2'>
                            <label htmlFor="name">Occupation *</label>
                            <input type="text" name='occupation' onChange={handelInputChange} value={inputValue.fullName} id='name' className='inputLogin w-full ' placeholder='Full Name' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Nation *</label>
                            <input type="text" name='nation' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Country *</label>
                            <input type="text" name='country' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}

                    </div>
                    <div className='childForm flex gap-4'>
                        <div className='w-full mt-2'>

                            <div className='relative w-full '>
                                <div className='child '>
                                    <label htmlFor="gender">Married * </label>
                                    <div onClick={handelSelect} className='select w-full focus:ring-2 ring-indigo-500 ml-0 '  >
                                        <p>{married == "" || married == null ? 'Select Married .... ' : married}</p>
                                        <div className={openSelect ? 'parentCaretDown' : 'duration-300'} >
                                            <AiFillCaretDown />
                                        </div>
                                    </div>
                                    {
                                        openSelect && <div className='parentOption absolute w-[49%] left-0 top-[4.5rem]'>
                                            <div onClick={() => {
                                                setOpenSelect(false)
                                                setMarried('Married');
                                            }} className='option'>
                                                Married
                                            </div>

                                            <div className='option' onClick={() => {
                                                setOpenSelect(false)
                                                setMarried('Single');
                                            }}>
                                                Single
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-2'>
                            <label htmlFor="number">No. of Family *</label>
                            <input type="text" name='NoFamily' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>

                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>

                            <label htmlFor="name">Province *</label>
                            <input type="text" onChange={handelInputChange} value={inputValue.birth} name='province' className='inputLogin w-full' placeholder='any' />
                        </div>
                        {/* end parent Input & label */}
                    </div>

                    <div className='childForm flex gap-4 py-4 '>
                        <div className='w-full mt-2'>
                            <label htmlFor="name">District *</label>
                            <input type="text" name='district' onChange={handelInputChange} value={inputValue.fullName} id='name' className='inputLogin w-full ' placeholder='Full Name' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Street/Neighborhood *</label>
                            <input type="text" name='street' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Closest place to home *</label>
                            <input type="text" name='closetHome' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}

                    </div>

                    <div className='childForm flex gap-4 py-4 '>
                        <div className='w-full mt-2'>
                            <label htmlFor="name">Secound Phone Number *</label>
                            <input type="text" name='scoundPhoneNo' onChange={handelInputChange} value={inputValue.fullName} id='name' className='inputLogin w-full ' placeholder='Full Name' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">National Identity Card Number *</label>
                            <input type="text" name='card' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
                        </div>
                        {/* end parent Input & label */}

                        <div className='w-full mt-2'>
                            <label htmlFor="number">Smoking *</label>
                            <input type="text" name='smoke' onChange={handelInputChange} value={inputValue.phone} id='number' className='inputLogin w-full' placeholder='Phone Number' />
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

export default ViewModal