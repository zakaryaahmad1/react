import { combineReducers, legacy_createStore as createStore } from "redux";
import userReducer from "../reducers/User";
import { PatientReducer } from "../reducers/Patient";

const rootReducer=combineReducers({
    user:userReducer,
    Patient:PatientReducer
});

export const store=createStore(rootReducer);