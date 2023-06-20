import { Link } from 'react-router-dom';
import classes from './Nav.module.css'

const Nav = () => {
    return <nav className = {classes.nav}>
        <div className={classes.item }>
            <Link to='/profile' className={({ navData }) =>(navData ? classes.active : classes.item)}>Profile</Link>
        </div>
        <div className={classes.item}>
            <Link to='/dialogs'  className={({ navData }) =>(navData ? classes.active : classes.item)}>Messages</Link>
        </div>
        <div className={classes.item}>
            <Link to='/users'  className={({ navData }) =>(navData ? classes.active : classes.item)}>Users</Link>
        </div>
        <div className={classes.item}>
            <a> News</a>
        </div>
        <div className={classes.item}>
            <a> Music</a>
        </div>
        <div className={classes.item}>
            <a> Setting</a>
        </div>
        
    </nav>
}

export default Nav;