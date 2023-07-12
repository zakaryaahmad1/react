import axios from "axios"

import Swal from "sweetalert2";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../ActionType/userLoginType";
export const login = (email, password) => (dispatch)=> {
    loginApi.post('/login', {
        email,
        password
    })
        .then((response) => {
            dispatch({ type: USER_LOGIN_REQUEST });
            if (response.data.status === 200) {
                dispatch({ type: USER_LOGIN_SUCCESS, payload:response.data.user, error: '' });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isLoggedIn',true);
            } else if (response.data.status === 404) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Check Your email and password',
                    });
            }
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Request Is Faild',
                })
        });
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

export const loginApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/zad_system',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    }
});