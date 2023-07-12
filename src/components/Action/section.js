import Swal from "sweetalert2";
import { FETCH_SECTION_REQUEST, FETCH_SECTION_SUCCESS } from "../ActionType/sectionType";
import { api } from "../Api/api"
import store from "../ReduxStore/store";
import { getToken } from "./login";

export const getSection=()=>{
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
    api.get('section',config)
    .then((response)=>{
        store.dispatch({
            type:FETCH_SECTION_REQUEST
        });
        if(response.data.status===200){
            store.dispatch({type:FETCH_SECTION_SUCCESS,payload:response.data.section});
        }
    })
    .catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Request Is Faild',
        });
    });
}