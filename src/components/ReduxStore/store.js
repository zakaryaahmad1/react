import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {userLoginReducer} from '../Reducer/userLoginReducer';
import thunk from 'redux-thunk'
import { getBranchReducer } from '../Reducer/BrnachReducer';
import { getUserReducer, userCreateReducer } from '../Reducer/userCreateReducer';
import { getSectionReducer } from '../Reducer/sectionReducer';
import { getPatientReducer, patientCreateReducer } from '../Reducer/patientReducer';
import { createCommiteReducer, getCommiteReducer } from '../Reducer/commiteReducer';


const rootReducer = combineReducers({
    userLogin:userLoginReducer,
    userCreate:userCreateReducer,
    getUser:getUserReducer,
    getBranch:getBranchReducer,
    getSection:getSectionReducer,
    getPatients:getPatientReducer,
    createPatient:patientCreateReducer,
    
    createCommite:createCommiteReducer,
    getCommite:getCommiteReducer
    
});

export const  store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
 
