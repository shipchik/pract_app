import React from "react";
import style from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
interface DialogProps {
    name: string;
    id: number;
}



const Dialog = (props: DialogProps) => {
    return (
        <div className={style.dialog+ ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog