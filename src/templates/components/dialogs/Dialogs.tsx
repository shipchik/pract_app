import style from "./Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";



interface DialogProps{
    dialogs: {
        id: number;
        name: string;
    }[]
    messages: {
        id: number;
        message: string;
    }[]

}




const Dialogs = (props:DialogProps) => {

    let DialogsElements = props.dialogs.map(
        dialog => <Dialog name={dialog.name} id={dialog.id} />
    );

    let messageElements = props.messages.map(
        message => < Message message={message.message} />
    );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
