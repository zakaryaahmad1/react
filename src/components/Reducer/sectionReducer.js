import { FETCH_SECTION_FAIL, FETCH_SECTION_REQUEST, FETCH_SECTION_SUCCESS } from "../ActionType/sectionType"

export const getSectionReducer = (state ={loading:true,sections:[],error:''} , action) => {
    switch (action.type) {
        case FETCH_SECTION_REQUEST:
            return {
                loading:true
            }
        case FETCH_SECTION_SUCCESS:
            return {
                loading:false,
                sections:action.payload,
                error:''
            }
        case FETCH_SECTION_FAIL:
            return {
                loading:false,
                sections:[],
                error:"Please Check Your Request"
            }
        default:
            return state
    }
}