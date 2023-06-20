const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGE = 'SET_USERS_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [], 
    pageSize: 5, 
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}    

const userReducer = (state = initialState, actions) => {

    switch(actions.type){
        case FOLLOW:
           return {
            ...state, 
            users: state.users.map( u => {
                if (u.id === actions.userId){
                    return {...u, followed: true}
                }
                return u;
            })
           }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map( u => {
                    if (u.id === actions.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }    
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...actions.users ]}
        }
        case SET_USERS_PAGE: {
            return { ...state, users: [ ...state.users, ...actions.users ]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: actions.users}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: actions.count}
        }
        case TOGGLE_IS_FETCHING: {
            return  { ...state, isFetching: actions.isFetching}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default userReducer;