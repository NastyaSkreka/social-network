import classes from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <div className = {classes.dialog + ' ' + classes.active}>
                    Dima
                </div>
                <div className = {classes.dialog}>
                    Sveta
                </div>
                <div className = {classes.dialog}>
                    Sasha
                </div>
            </div>
            <div className = {classes.messages}>
                <div className="message">Hi</div>
                <div className="message">How are you</div>
                <div className="message">Ok</div>
            </div>
           
        </div>
    )
}

export default Dialog;