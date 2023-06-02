import classes from '../Dialog.module.css'
import {Link} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return  <div className = {classes.dialog}>
                <Link  to={path}>{props.name}</Link>
            </div>
}

export default DialogItem;