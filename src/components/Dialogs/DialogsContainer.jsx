import style from "./Dialogs.module.css";
import React from "react";

import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { useState } from "react";

import Dialogs from "./Dialogs";

import { connect, useDispatch } from "react-redux";

import { sendMessageCreator,updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";






let mapStateToProps=(state) =>{
    
    return  {
        messagePage:state.messagePage,
        isAuth: state.auth.isAuth
        
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        
        updateNewMessageBody : (body) =>{
            
             dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (body) =>{
            
            dispatch(sendMessageCreator(body))
        }

    }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
