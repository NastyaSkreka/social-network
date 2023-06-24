import  { Component } from 'react'
import Header from './Header';
import axios  from 'axios';
import { connect } from "react-redux";
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            widthCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        });
    }
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, 
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);