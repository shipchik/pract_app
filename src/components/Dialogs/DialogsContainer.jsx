import style from "./Dialogs.module.css";
import React from "react";

import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { useState } from "react";

import Dialogs from "./Dialogs";

import { connect, useDispatch } from "react-redux";

import { sendMessageCreator,updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";




let mapStateToProps=(state) =>{
    
    return  {
        messagePage:state.messagePage,
        
        
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



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
    
    
)(Dialogs)
