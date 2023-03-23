import style from "./Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";







const Dialogs = () => {


    let dialogsData = [
        {id:1, name:"Maxim"},
        {id:2, name:"Lera"},
        {id:3, name:"Anton"},
        {id:4, name:"Katya"},
        {id:5, name:"Vika"},

    ]

    let DialogsElements = dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id} />
    );


    let MessageData = [
        {id:1,message:"hi"},
        {id:2,message:"How Are You"},
        {id:3,message:"Hello"}
    ]

    let messageElements = MessageData.map(
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
