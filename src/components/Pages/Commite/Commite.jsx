import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../Action/userRegister';
import { getCommite } from '../../Action/commiteAction';
import ViewModal from '../../Modal/ViewModal';

const Commite = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector(state => state.getUser);
  const getCommites=useSelector(state=>state.getCommite);
  const [isOpenViewModal,setIsOpenViewModal]=useState(false);
  const [patientId,setPatientId]=useState(null);

  const {data}=getCommites;
  const { users } = getUsers;

  const handelViewModal=(id)=>{
    
    setIsOpenViewModal(true);
    setPatientId(id)
    console.log(patientId);
    
  }
  useEffect(() => {
    
    const { location_id } = users;
    dispatch(getUserAuth());
    if (location_id == undefined || location_id == null) {
      return;
    }
    if (location_id == 2) {
      dispatch(getCommite(2));
      console.log('data : ',data)
    }
  }, [isOpenViewModal]);
  return (
    <div>
      <table className='overflow-x-scroll'>
            <thead>

              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Birth Date</th>
                <th>Visit Date</th>
                <th>Smoking</th>
                <th>Action</th>

              </tr>
            </thead>
            
    <tbody>
      {
        data.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.Pname}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td>{item.birthDate}</td>
              <td>20/3/2023</td>
              <td>{item.smoke}</td>
              <td className='flex gap-4 w-28'>
                <button className='assignBtn' onClick={(e)=>{
                  e.preventDefault();
                  handelViewModal(item.idCommit)
                }}>View</button>
                <button className='assignBtn'>Assign</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
      </table>

      {
        isOpenViewModal && <ViewModal closeModal={setIsOpenViewModal} patientId={patientId}/>
      }
    </div>
  )
}

export default Commite