import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../ActionType/userLoginType"

export const userLoginReducer = (state ={loading:false,user:[],loggedIn:false,error:''} , action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                loading:false,
                user:action.payload,
                error:'',
                loggedIn:true
            }
        case USER_LOGIN_FAIL:
            return {
                loading:false,
                users:[],
                loggedIn:false,
                error:'fetch faild '
            }
        default:
            return state
    }
}