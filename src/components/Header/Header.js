import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <header className = {classes.header}>
        <div className={classes.loginBlock}>
            { props.isAuth ? props.login 
            : <Link to={'/login'}>Login</Link> }
            
        </div>
    </header>
}

export default Header;