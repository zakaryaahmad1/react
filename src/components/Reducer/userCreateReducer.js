import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../ActionType/userCreateType"

export const userCreateReducer = (state ={loading:false,users:[],error:''} , action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                loading:true
            }
        case CREATE_USER_SUCCESS:
            return {
                loading:true,
                users:action.payload,
                error:''
            }
        case CREATE_USER_FAIL:
            return {
                loading:false,
                users:[],
                error:''
            }
        default:
            return state
    }
}

export const getUserReducer = (state ={loading:true,users:[],error:''} , action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                loading:true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_FAIL:
            return {
                loading:false,
                users:[],
                error:''
            }
        default:
            return state
    }
}