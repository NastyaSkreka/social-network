import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer, 
    userPage: userReducer, 
    auth: authReducer
})

let store = createStore(reducers);

export default store;