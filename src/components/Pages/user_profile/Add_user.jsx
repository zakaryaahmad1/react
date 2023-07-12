import React, { useEffect, useState } from 'react'
import './css/add_user.css';
import { AiFillCaretDown } from 'react-icons/ai';
// import { create_user } from '../../action/create_user';

import { userRegister } from '../../Action/userRegister';
import { useDispatch, useSelector } from 'react-redux';
import { getBranch } from '../../Action/branch';
import { getSection } from '../../Action/section';

const Add_user = () => {
    const dispatch = useDispatch();
    const getBranchs = useSelector(state => state.getBranch);
    const getSections = useSelector(state => state.getSection);
    const {sections}=getSections;
    const { branchs } = getBranchs;
    useEffect(() => {
        getBranch();
        getSection();
    }, []);

    const [openSelect, setOpenSelect] = useState(false);
    const [isOpenLocation, setIsOpenLocation] = useState(false);

    const [gender, setGender] = useState(null);

    const [location, setLocation] = useState(null);
    const [showLocation, setShowLocation] = useState(null);

    const [isOpenSection, setIsOpenSection] = useState(false);
    const [section, setSection] = useState(null);
    const [showSection, setShowSection] = useState(null);

    const [isOpenRule, setIsOpenRule] = useState(false);
    const [rule, setRule] = useState(null);

    const [isOpenBlood, setIsOpenBlood] = useState(false);
    const [blood, setBlood] = useState(null);


    const [inputValue, setInputValue] = useState({
        fullname: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        birth_date: ''
    });

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const {
            fullname,
            email,
            phone,
            password,
            birth_date
        } = inputValue;
        dispatch(userRegister(fullname, email, password, rule, blood, phone, gender, birth_date, location));
    }

    const handelSelect = () => {
        setIsOpenLocation(false);
        setIsOpenBlood(false);
        setIsOpenRule(false);
        setIsOpenSection(false);
        setOpenSelect(
            openSelect ? false : true
        )
    }
    const handelSection = () => {
        setIsOpenLocation(false);
        setIsOpenBlood(false);
        setIsOpenRule(false);
        setGender(false);
        setIsOpenSection(
            isOpenSection ? false : true
        )
    }

    const handelRule = () => {
        setOpenSelect(false);
        setIsOpenBlood(false);
        setIsOpenLocation(false);
        setIsOpenSection(false);
        setIsOpenRule(
            isOpenRule ? false : true
        )
    }

    const handelBloodGroup = () => {
        setOpenSelect(false);
        setIsOpenLocation(false);
        setIsOpenRule(false);
        setIsOpenSection(false);
        setIsOpenBlood(
            isOpenBlood ? false : true
        )
    }

    const handelLocation = () => {
        setOpenSelect(false);
        setIsOpenBlood(false);
        setIsOpenRule(false);
        setIsOpenSection(false);
        setIsOpenLocation(
            isOpenLocation ? false : true
        )
    }

    return (
        <div className='parentFormUser   '>

            <div><h1 className='head'>User Register</h1>

                <form action="">

                    <div className='parentInputUser'>

                        <div className='child'>
                            <label htmlFor="">FirstName :</label>
                            <input type="text" name='fullname' onChange={handelInputChange} value={inputValue.fullname || ''} className='inputLogin mt-2' placeholder='FirstName' />
                        </div>

                        

                        <div className='relative w-full '>
                            <div className='child '>
                                <label htmlFor="">Section</label>
                                <div onClick={handelSection} className='select'  >
                                    <p>{showSection == "" || showSection == null ? 'Select Location ' : showSection}</p>
                                    <div className={isOpenSection ? 'parentCaretDown' : 'duration-300'} >
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                                {
                                    isOpenSection &&
                                    <div className='parentOption pb-2 absolute w-[49%]  top-[4.5rem]'>
                                        {
                                            sections.map((section)=>{
                                                return (
                                                    <div onClick={() => {
                                                        setIsOpenSection(false)
                                                        setSection(section.id);
                                                        setShowSection(section.sName)
            
                                                    }} className='option'>
                                                        {section.sName}
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                }
                            </div>
                        </div>
                    
                    {/* end */}

                    </div>


                    <div className='parentInputUser mt-3'>

                        <div className='child'>
                            <label htmlFor="">Email :</label>
                            <input type="email" name='email' onChange={handelInputChange} value={inputValue.email || ''} className='inputLogin mt-2' placeholder='Email' />
                        </div>

                        <div className='child'>
                            <label htmlFor="">Password :</label>
                            <input type="password" name='password' onChange={handelInputChange} value={inputValue.password || ''} className='inputLogin mt-2' placeholder='Password' />
                        </div>

                    </div>
                    {/* end */}
                    <div className='parentInputUser mt-4 '>

                        <div className='relative w-full'>
                            <div className='child'>
                                <label htmlFor="">Rule :</label>
                                <div onClick={handelRule} className='select'  >
                                    <p>{rule == "" || rule == null ? 'Select Rule .. ' : rule}</p>
                                    <div className={isOpenRule ? 'parentCaretDown' : 'duration-300'} >
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                                {
                                    isOpenRule && <div className='parentOption absolute left-8 top-[4.5rem]  '>
                                        <div onClick={() => {
                                            setIsOpenRule(false);

                                            setRule('admin_zad');
                                        }} className='option'>
                                            Admin
                                        </div>

                                        <div className='option' onClick={() => {
                                            setIsOpenRule(false);
                                            setRule('user_zad');
                                        }}>
                                            User
                                        </div>

                                        <div className='option' onClick={() => {
                                            setIsOpenRule(false)
                                            setRule('staff_zad');
                                        }}>
                                            staff
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>




                        <div className='relative w-full '>
                            <div className='child '>
                                <label htmlFor="">Blood Group :</label>
                                <div onClick={handelBloodGroup} className='select'  >
                                    <p>{blood == "" || blood == null ? 'Select Blood Group ' : blood}</p>
                                    <div className={isOpenBlood ? 'parentCaretDown' : 'duration-300'} >
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                                {
                                    isOpenBlood && <div className='parentOption pb-2 absolute w-[49%]  top-[4.5rem]'>
                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('A+')
                                        }} className='option'>
                                            A+
                                        </div>

                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('A-')
                                        }} className='option'>
                                            A-
                                        </div>


                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('B+')
                                        }} className='option'>
                                            B+
                                        </div>

                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('B-')
                                        }} className='option'>
                                            B-
                                        </div>


                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('O+')
                                        }} className='option'>
                                            O+
                                        </div>

                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('O-')
                                        }} className='option'>
                                            O-
                                        </div>


                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('AB+')
                                        }} className='option'>
                                            AB+
                                        </div>

                                        <div onClick={() => {
                                            setIsOpenBlood(false)
                                            setBlood('AB-')
                                        }} className='option'>
                                            AB-
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    {/* end */}

                    <div className='parentInputUser relative mt-3'>
                        <div className='child'>
                            <label htmlFor="">Phone Number :</label>
                            <input type="text" name='phone' onChange={handelInputChange} value={inputValue.phone || ''} className='inputLogin mt-2' placeholder='Phone Number' />
                        </div>


                        <div className='child'>
                            <label htmlFor="">BirthDate :</label>
                            <input type="date" name='birth_date' onChange={handelInputChange} value={inputValue.birth_date || ''} className='inputLogin mt-2' placeholder='Phone Number' />
                        </div>

                    </div>

                    <div className='parentInputUser mt-4 '>

                        <div className='relative w-full'>
                            <div className='child'>
                                <label htmlFor="">Gender : </label>
                                <div onClick={handelSelect} className='select'  >
                                    <p>{gender == "" || gender == null ? 'Select Gender .. ' : gender}</p>
                                    <div className={openSelect ? 'parentCaretDown' : 'duration-300'} >
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                                {
                                    openSelect && <div className='parentOption absolute w-[49%] top-[4.5rem]'>
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




                        <div className='relative w-full '>
                            <div className='child '>
                                <label htmlFor="">Location</label>
                                <div onClick={handelLocation} className='select'  >
                                    <p>{showLocation == "" || showLocation == null ? 'Select Location ' : showLocation}</p>
                                    <div className={isOpenLocation ? 'parentCaretDown' : 'duration-300'} >
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                                {
                                    isOpenLocation &&
                                    <div className='parentOption pb-2 absolute w-[49%]  top-[4.5rem]'>
                                        {
                                            branchs.map((branch)=>{
                                                return (
                                                    <div onClick={() => {
                                                        setIsOpenLocation(false)
                                                        setLocation(branch.id);
                                                        setShowLocation(branch.bName)
            
                                                    }} className='option'>
                                                        {branch.bName}
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* end */}




                    <div className='w-4/12 m-auto'>
                        <button className='btn py-3 hover:bg-teal-600 duration-300' onClick={handelSubmit}>Create User</button>
                    </div>

                </form>
            </div>



        </div>
    )
}

export default Add_user