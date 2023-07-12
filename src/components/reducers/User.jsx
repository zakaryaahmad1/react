import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actionType/userAction"

const initialState={
    loader:true,
    users:[],
    error:''
}

const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loader:true
            }
        case FETCH_USER_SUCCESS:
            console.log(state.users);
            return {
                ...state,
                loader:false,
                users:action.payload,
                error:''
            }
            
        case FETCH_USER_FAIL:
            return {
                loader:false,
                users:[],
                error:'Please Check Users'
            }
        default:
            return state
    }
    
}

export default userReducer