import Swal from "sweetalert2";
import { api } from "../Api/api"
import { getToken } from "./login";
import { CREATE_COMMITE_FAIL, CREATE_COMMITE_REQUEST, CREATE_COMMITE_SUCCESS, FETCH_COMMITE_SUCCESS } from "../ActionType/commiteType";

export const createCommiteSuli = (idLocation,patientId
    , occupation
    , nation, country, married, NoFamily, province, district
    , street, closetHome, scoundPhoneNo, card, smoke, reset) => (dispatch) => {
        const config = {
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${getToken()}`
            }
        }
        api.post('commite/createSuli', {
            idLocation,
            patientId,
            occupation,
            nation,
            married,
            country,
            NoFamily,
            province,
            district,
            street,
            closetHome,
            scoundPhoneNo,
            card,
            smoke
        }, config)
            .then((response) => {
                dispatch({ type: CREATE_COMMITE_REQUEST });
                if (response.data.status == 200) {
                    const suliCommite = response.data.suliCommite;
                    dispatch({ type: CREATE_COMMITE_SUCCESS, payload: suliCommite });
                    Swal.fire(
                        'Good job!',
                        'Patient Was Assigned',
                        'success'
                    );
                } else if (response.data.status == 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Pleas Fill all the gaps',
                    });
                }
            })
            .catch(() => {
                dispatch({ type: CREATE_COMMITE_FAIL })
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Request Is Faild',
                });
            });
    }

export const getCommite=(location_id)=>(dispatch)=>{
    // console.log('id',location_id)
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
    api.get(`commite?locationId=${location_id}`,config)
    .then((response)=>{
        if(response.data.status===200){
            const {data}=response.data;
            dispatch({type:FETCH_COMMITE_SUCCESS,payload:data});
        }
    })
    .catch(()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Request Is Faild',
        });
    })
}