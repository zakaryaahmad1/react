import {
    CREATE_COMMITE_FAIL,
    CREATE_COMMITE_REQUEST,
    CREATE_COMMITE_SUCCESS,
    FETCH_COMMITE_FAIL,
    FETCH_COMMITE_REQUEST,
    FETCH_COMMITE_SUCCESS
} from "../ActionType/commiteType"
// import { FETCH_PATIENT_FAIL, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from "../ActionType/patientType"

export const createCommiteReducer = (state = { loading: true, suliCommite: [], error: '' }, action) => {
    switch (action.type) {
        case CREATE_COMMITE_REQUEST:
            return {
                loading: true
            }
        case CREATE_COMMITE_SUCCESS:
            return {
                loading: false,
                suliCommites: action.payload,
                error: ''
            }
        case CREATE_COMMITE_FAIL:
            return {
                loading: false,
                suliCommite: [],
                error: 'Please Check Your request'
            }
        default:
            return state
    }
}


export const getCommitInfoReducer = (state = { loading: true, commiteInfo: [], error: '' }, action) => {
    switch (action.type) {
        case value:
            return{
                loading:true
            }
    
        default:
            break;
    }
}
export const getCommiteReducer = (state = { loading: true, data: [], total: 0, error: '' }, action) => {
    switch (action.type) {
        case FETCH_COMMITE_REQUEST:
            return {
                loading: true
            }
        case FETCH_COMMITE_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                total: action.total,
                error: ''
            }
        case FETCH_COMMITE_FAIL:
            return {
                loading: false,
                patient: [],
                error: 'Please Check Your request'
            }
        default:
            return state
    }
}