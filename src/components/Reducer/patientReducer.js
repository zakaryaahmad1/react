import { CREATE_PATIENT_FAIL, CREATE_PATIENT_REQUEST, CREATE_PATIENT_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from "../ActionType/patientType"

export const patientCreateReducer = (state = { loading: true, patient: [], error: '' }, action) => {
    switch (action.type) {
        case CREATE_PATIENT_REQUEST:
            return {
                loading: true
            }
        case CREATE_PATIENT_SUCCESS:
            
            return {
                loading: false,
                patient: action.payload,
                
                error: ''
            }
        case CREATE_PATIENT_FAIL:
            return {
                loading: false,
                patient: [],
                error: 'Please Check Your request'
            }
        default:
            return state
    }
}
export const getPatientReducer = (state = { loading: true, patients: [],total:0, error: '' }, action) => {
    switch (action.type) {
        case FETCH_PATIENT_REQUEST:
            return {
                loading: true
            }
        case FETCH_PATIENT_SUCCESS:
            return {
                loading: false,
                patients: action.payload,
                total:action.total,
                error: ''
            }
        case FETCH_PATIENT_FAIL:
            return {
                loading: false,
                patient: [],
                error: 'Please Check Your request'
            }
        default:
            return state
    }
}