
import React from "react";
import style from './../Dialogs.module.css';

interface MessageProps{
    message:string;
}

const Message = (props:MessageProps) => {
    return(
        <div className={style.dialog}>
            {props.message}
        </div>
    );
}

export default Message;