import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'

const Dialog = (props) => {
    
    let dialogsElement = props.state.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>  )
    let messagesElement = props.state.messages.map( message => <Message message = {message.message}/>)

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