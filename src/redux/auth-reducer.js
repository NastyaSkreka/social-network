const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null, 
    email: null, 
    login: null, 
    isAuth: false
}

const authReducer = (state = initialState, actions) => {
    switch (actions.type){
        case SET_USER_DATA:
            return{
                ...state, 
                ...actions.data, 
                isAuth: true
            }
            default: 
                return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId,email,login }})
export default authReducer;