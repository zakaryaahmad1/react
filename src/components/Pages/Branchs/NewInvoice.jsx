import { useDispatch, useSelector } from 'react-redux';
import { createPatient, getPatient } from '../../Action/patient';
import ReactPaginate from 'react-paginate';
import './css/invoice.css';
import { useEffect, useState } from 'react';
import { getUserAuth } from '../../Action/userRegister';
import Logo from '../../Image/Logo.jpg'
import { MdOutlinePersonalInjury } from 'react-icons/md';

import InvoiceModal from '../../Modal/InvoiceModal';
import AssignModal from '../../Modal/AssignModal';

const NewInvoice = () => {

  const dispatch = useDispatch();
  const getUsers = useSelector(state => state.getUser);
  const getPatients = useSelector(state => state.getPatients);
  const [idLocation, setIdLocation] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const { users } = getUsers;
  const { patients, loading,total } = getPatients;

  const [currentPage,setCurrentPage]=useState(0);
  const [perPage, setPerPage] = useState(10);


  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenAssignModal, setIsOpenAssignModal] = useState(false);
  const [filterName, setFilterName] = useState(null);
  const [filterPhone, setFilterPhone] = useState(null);


  

  // fetch Auth user 
  useEffect(() => {
    dispatch(getUserAuth());
      
    dispatch(getPatient(users.location_id,currentPage,perPage));
  }, [users.location_id,currentPage]);


  return (
    <div>
      <div className='parentInvoice'>
        <div className="headInvoice">
          <div className='flex gap-2 items-center'>
            <p className='text-3xl text-teal-600'><MdOutlinePersonalInjury /></p>
            <div>
              <h1 className="text-2xl">Patient</h1>
            </div>

          </div>
          <div><button className="btnInvoice" onClick={() => setIsOpenModal(true)}>New Pateint</button></div>
        </div>
        {/* heading  */}
      </div>


      <form action="">
        <div className='flex justify-center ml-10'>
          <div className='w-full'>

            <input type="text" onChange={(e) => setFilterName(e.target.value)} className='inputLogin' placeholder='Name' />
          </div>
          <div className='w-full'>

            <input type="text" onChange={(e) => setFilterPhone(e.target.value)} className='inputLogin' placeholder='Phone' />
          </div>
          {/* <div className='w-full'>
            <input type="text" onChange={(e) => setFilterName(e.target.value)} className='inputLogin' placeholder='Name' />
          </div> */}
        </div>
      </form>


      {/* table */}
      {

        loading ? <img src={Logo} className='w-48 m-auto animate-pulse' />
          :
          <table>
            <thead>

              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Birth Date</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>

              {
                patients.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.code}</td>
                      <td>{item.Pname}</td>
                      <td>{item.phone}</td>
                      <td>{item.gender}</td>
                      <td>{item.birthDate}</td>
                      <td className='text-center'>
                        <button className='assignBtn hover:bg-sky-800' onClick={() => {
                          setIsOpenAssignModal(true);
                          setIdLocation(item.location_patinet);
                          setPatientId(item.id)
                        }}>
                          Assign
                        </button>
                      </td>
                    </tr>
                  )
                })

              }

            </tbody>
          </table>
      }
      <div className='w-full flex justify-end items-center'>
      <ReactPaginate
        previousLabel={'< previous '}
        pageCount={Math.ceil(total/10)}
        nextLabel={'next >'}
        className={'flex  mr-7 mt-2  py-3 px-4 items-center  gap-4 bg-white rounded-lg shadow-lg  '}
        pageLinkClassName={' px-3  mt-4  '}
        activeClassName={' bg-indigo-600 rounded-full py-1 text-white '}
        // onClick={handelClick}
        
        onPageChange={(event)=>{
          let currentPage=event.selected+1;
          dispatch(getPatient(users.location_id,currentPage,perPage));
          setCurrentPage(currentPage)
        }}
        
      />
      </div>

      {
        isOpenModal && <InvoiceModal closeModal={setIsOpenModal} />
      }

      {
        isOpenAssignModal && <AssignModal closeModal={setIsOpenAssignModal}  locationId={idLocation} patientId={patientId} />
      }





    </div>
  )
}

export default NewInvoice