import {api} from '../Api/api';
import {getToken} from '../Action/login'
import { CREATE_PATIENT_REQUEST, CREATE_PATIENT_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from '../ActionType/patientType';
import Swal from 'sweetalert2';

export const createPatient=(fullName,phone,gender,birth,branchId,patientId,reset)=>(dispatch)=>{
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }

    if(branchId==2){
        api.post('patient/create/suli?currentPage=0&perPage=10',{
            fullName,
            phone,
            gender,
            birth,
            branchId,
            patientId
        },config)
        .then((response)=>{
            dispatch({type:CREATE_PATIENT_REQUEST});
            console.log(response.data.patient)
            if(response.data.status===200){
                const {total}=response.data;
                dispatch({type:CREATE_PATIENT_SUCCESS,payload:response.data.patient,total:total});
                Swal.fire(
                    'Good job!',
                    'Patient Was Add',
                    'success'
                  )
                  reset();
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Pleas Fill all the gaps',
                });
                reset();
            }
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Request Is Faild',
            });
        });
    }

    if(branchId==3){
        api.post('patient/create',{
            fullName,
            phone,
            branchId
        },config)
        .then((response)=>{
            dispatch({type:CREATE_PATIENT_REQUEST});
            console.log(response.data.patient)
            if(response.data.status===200){
                dispatch({type:CREATE_PATIENT_SUCCESS,payload:response.data.patient});
                Swal.fire(
                    'Good job!',
                    'Patient Was Add',
                    'success'
                  )
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Pleas Fill all the gaps',
                });
            }
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Request Is Faild',
            });
        });
    }
    
}


export const getPatient=(branchId,cuurentPage,perPage)=>(dispatch)=>{
    
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
    api.get(`patient/fetchSuli/${branchId}?currentPage=${cuurentPage}&perPage=${perPage}`,config)
    .then(response=>{
        dispatch({type:FETCH_PATIENT_REQUEST});
        if(response.data.status===200){
            const {count}=response.data;
            
            const data=response.data.patientSuli;
            const reverseData=data.reverse();
            dispatch({type:FETCH_PATIENT_SUCCESS,payload:reverseData,total:count});
        }
    })
    .catch(()=>{
        dispatch({type:FETCH_PATIENT_FAIL,payload:[]});
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Request Is Faild',
        });
    })
}