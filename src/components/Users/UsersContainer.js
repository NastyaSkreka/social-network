import { connect } from "react-redux";
import { follow, unfollow,setUsers, setCurrentPage, setUsersTotalCount,toggleIsFetching } from "../../redux/users-reducer";
import axios  from 'axios'
import  { Component } from 'react'
import Users from './Users'
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends Component {
    
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items )
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items )
        })
    }
 
    render(){
        return <>
        {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                            pageSize={this.props.pageSize} 
                            currentPage={this.props.currentPage}
                            onPageChanged= {this.onPageChanged}
                            users={this.props.users}
                            follow = {this.props.follow}
                            unfollow = {this.props.unfollow}
                
            /> 
        </>
    }
    
}

let mapStateToProps = (state) => {
    // что б наша компонента получила в пропсах эти значения
    // это все достается из стейта
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}

/*let mapDispathToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }, 
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/
// колбєки что то диспатчат в стор, там что то происходит и в mapStateToProps приходят новые данные из стейта 
// которые как пропсы переходят в компоненту 

export default connect(mapStateToProps, {follow, unfollow, setUsers,setCurrentPage,setUsersTotalCount,toggleIsFetching})(UsersContainer)