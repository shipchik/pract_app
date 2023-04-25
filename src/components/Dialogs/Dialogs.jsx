import style from "./Dialogs.module.css";
import React from "react";
import { NavLink, redirect } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { useState } from "react";
import { Navigate } from "react-router-dom";




const Dialogs = (props  ) => {
    debugger
    let state = props.messagePage;


    let DialogsElements = state.dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id} />
    );

    let messageElements = state.MessageData.map(
        message => < Message message={message.message} />
    );
    let newMessageBody = state.newMessageBody

    let onSendMessageClick =() =>{
        setMessage('');
        props.sendMessage(message);
        
        
    }
    let [message, setMessage] = useState('');
    let onNewMessageChange =(e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    if(!props.isAuth){
        return <Navigate to={"/login"} />
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div>
                    <div><textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message"></textarea></div> 
                     <div><button onClick={onSendMessageClick}></button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;