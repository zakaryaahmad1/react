import { useDispatch, useSelector} from 'react-redux'

import { useEffect } from 'react';
import axios from 'axios';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './actionType/userAction';
import { FETCH_SUCCESS } from './actionType/action';
const Redux = () => {
  const usersInfo=useSelector(state=>state.user.users)
  const loader=useSelector(state=>state.loader)
  const patient=useSelector(state=>state.Patient.numberOfPatient);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch({type:FETCH_USER_REQUEST});
    dispatch({type:FETCH_SUCCESS});
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      dispatch({type:FETCH_USER_SUCCESS,payload:res.data})
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      {
        loader ? 'loading ....':
        usersInfo.map(user=>(
          <div>{user.name}</div>
        ))
      }
      Patient Num - {patient}
      
    </div>

  )
}



export default (Redux)