import classes from './Dialog.module.css'
import {Link} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return  <div className = {classes.dialog}>
                <Link  to={path}>{props.name}</Link>
            </div>
}

const Message = (props) => {
    return <div className="message">{props.message}</div>
}

const Dialog = () => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
              <DialogItem name = 'Dima' id = '1'/>     
              <DialogItem name = 'Sveta' id = '2'/>    
              <DialogItem name = 'Sasha' id = '3'/>    

            </div>
            <div className = {classes.messages}>
                <Message message = 'Hi'/>
                <Message message = 'How are you'/>
                <Message message = 'Ok'/>
            </div>
           
        </div>
    )
}

export default Dialog;