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

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'}
    ]

    let messages = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Ok'}
    ]

    let dialogsElement = dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>  )
    let messagesElement = messages.map( message => <Message message = {message.message}/>)

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
              {dialogsElement}    
            </div>
            <div className = {classes.messages}>
               {messagesElement}
            </div>
           
        </div>
    )
}

export default Dialog;