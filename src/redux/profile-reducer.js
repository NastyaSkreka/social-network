const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12}, 
        {id: 2, message: 'Its my first post',  likesCount: 11}, 
        {id: 3, message: 'blabla',likesCount: 9 }
    ], 
    newPostText: 'it-kamasutra', 
    profile: null
}

const profileReducer = ( state = initialState, actions) => {

    switch(actions.type){
        case ADD_POST: {
            let newPost = {
                id: 5, 
                message: state.newPostText, 
                likesCount: 0
            };
            return {
                ...state, 
                posts: [...state.posts, newPost], 
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, 
                newPostText: actions.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: actions.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text })
export const addUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export default profileReducer;