import { FETCH_BRANCH_FAIL, FETCH_BRANCH_REQUEST, FETCH_BRANCH_SUCCESS } from "../ActionType/branchsType"

export const getBranchReducer = (state ={loading:false,branchs:[],error:''} , action) => {
    switch (action.type) {
        case FETCH_BRANCH_REQUEST:
            return {
                loading:true
            }
        case FETCH_BRANCH_SUCCESS:
            console.log('reducer ',action.payload)
            return{
                loading:false,
                branchs:action.payload,
                error:''
            }
        case  FETCH_BRANCH_FAIL:
            return {
                loading:false,
                branchs:[],
                error:'Please Check Your Request'
            }
        default:
            return state
    }
}