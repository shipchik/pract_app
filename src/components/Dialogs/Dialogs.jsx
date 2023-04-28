import style from "./Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { reduxForm,Field } from "redux-form";




const Dialogs = (props  ) => {
    debugger
    let state = props.messagePage;

    
    let DialogsElements = state.dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id} />
    );

    let messageElements = state.MessageData.map(
        message => < Message message={message.message} />
    );
    

    let onSendMessageClick =(values) =>{
        
        props.sendMessage(values.newPostText);
        
        
    }
    
    // let onNewMessageChange =(e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }
   
    if (!props.isAuth){
        
        return <Navigate to={"/login"} />
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <ReduxFormNewDialogs onSubmit={onSendMessageClick} />
            </div>
        </div>
    );
};

const DialogsForm = (props) =>{
    return(
    <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field component={"textarea"} name="newPostText" placeholder="Enter your message"/>
                        </div> 
                     <div><button >Send</button></div>
                </form>
    )
}


const ReduxFormNewDialogs = reduxForm({form: "NewPost"})(DialogsForm)

export default Dialogs;