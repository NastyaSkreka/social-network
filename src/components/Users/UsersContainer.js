import { connect } from "react-redux";
import { followAC, unfollowAC,setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/users-reducer";
import * as axios from 'axios'
import  { Component } from 'react'
import Users from './Users'

class UsersContainer extends Component {
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items )
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items )
        })
    }
 
    render(){
        return <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize} 
               currentPage={this.props.currentPage}
               onPageChanged= {this.onPageChanged}
               users={this.props.users}
               follow = {this.props.follow}
               unfollow = {this.props.unfollow}
               
        /> 
    }
    
}

let mapStateToProps = (state) => {
    // что б наша компонента получила в пропсах эти значения
    // это все достается из стейта
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}

let mapDispathToProps = (dispatch) => {
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
        }

    }
}
// колбєки что то диспатчат в стор, там что то происходит и в mapStateToProps приходят новые данные из стейта 
// которые как пропсы переходят в компоненту 

export default connect(mapStateToProps, mapDispathToProps)(UsersContainer)