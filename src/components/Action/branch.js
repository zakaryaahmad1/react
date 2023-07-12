import { FETCH_BRANCH_REQUEST, FETCH_BRANCH_SUCCESS } from "../ActionType/branchsType"
import { api } from "../Api/api"
import store from "../ReduxStore/store"
import { getToken } from "./login"

export const getBranch=()=>{
    
    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }

    api.get('branch',config)
    .then(response=>{
        store.dispatch({type:FETCH_BRANCH_REQUEST})
        if(response.data.status===200){
            console.log()
            store.dispatch({type:FETCH_BRANCH_SUCCESS,payload:response.data.branchs});
        }else{
            return ;
        }
    })
    .catch(error=>{
        console.log(error)
    })

}