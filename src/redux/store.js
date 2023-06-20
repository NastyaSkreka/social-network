import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer, 
    userPage: userReducer
})

let store = createStore(reducers);

export default store;