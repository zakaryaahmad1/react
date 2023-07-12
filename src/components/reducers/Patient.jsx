import { FETCH_SUCCESS } from "../actionType/action"

const initialState={
    numberOfPatient:10
}
export const PatientReducer = (state =initialState , action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                numberOfPatient:state.numberOfPatient-1
            }
        default:
            return state
    }
}