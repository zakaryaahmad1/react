import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, FETCH_USER_FAIL, FETCH_USER_SUCCESS } from '../ActionType/userCreateType'
import {api} from '../Api/api'
import { getToken } from './login'

export const userRegister=(fullName,email,password,rule,blood,phone,gender,birth,location)=> async (dispatch)=>{
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
    api.post('user/create',{
        fullName,
        email,
        password,
        rule,
        blood,
        phone,
        gender,
        birth,
        location
    },config)
    .then((response)=>{
        dispatch({type:CREATE_USER_REQUEST});
        if(response.data.status===200){
            const user=response.data.user;
            dispatch({type:CREATE_USER_SUCCESS,payload:user});
        }
    }).catch(
        error=>{
            dispatch({type:CREATE_USER_FAIL,payload:[]});
        }
    )
}

export const getUserAuth=()=> (dispatch)=>{
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
    api.get('user/getAuth',config)
    .then(response=>{
        
        dispatch({type:FETCH_USER_FAIL})
        if(response.data.status===200){
            dispatch({type:FETCH_USER_SUCCESS,payload:response.data.userInfo})
        }
    }).catch(error=>{
        dispatch({type:FETCH_USER_FAIL,payload:[]})
    })
    ;
}