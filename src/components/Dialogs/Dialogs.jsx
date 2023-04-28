import style from "./Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { reduxForm,Field } from "redux-form";
import { Field, Form } from "react-final-form";
import { FormControl, TextArea } from "../common/FormsControl/FormsControl";

const Dialogs = (props) => {
  debugger;
  let state = props.messagePage;

  let DialogsElements = state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messageElements = state.MessageData.map((message) => (
    <Message message={message.message} />
  ));

  let onSendMessageClick =   values => {
    debugger
      props.sendMessage(values.newPostText);
  };

  // let onNewMessageChange =(e) => {
  //     let body = e.target.value;
  //     props.updateNewMessageBody(body);
  // }

  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }

  const required = value => {
    debugger
    return (value ? undefined : 'Required')}


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{DialogsElements}</div>
      <div className={style.messages}>
        {messageElements}
        <Form
            validate={required}
          onSubmit={onSendMessageClick}
          render={({ handleSubmit, form, submitting, pristine,reset}) => (
            <form
              onSubmit={handleSubmit}
            >
              <div>
                <Field
                validate={required}
                  
                  name="newPostText"
                  placeholder="Enter your message"
                  
                >
                {({ input, meta }) => (
                    <div>
                        <textarea {...input}></textarea>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
                </Field>
              </div>
              <div>
                <button disabled={submitting} type="submit">
                  Send
                </button>
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={form.reset}
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

// const DialogsForm = (props) =>{
//     return(
//     <form onSubmit={props.handleSubmit}>
//                     <div>
//                         <Field component={"textarea"} name="newPostText" placeholder="Enter your message"/>
//                         </div>
//                      <div><button >Send</button></div>
//                 </form>
//     )
// }

// const ReduxFormNewDialogs = reduxForm({form: "NewPost"})(DialogsForm)

// const ReduxFormNewDialogs = (props) =>(
//     <Form onSubmit={onSendMessageClick}>
//         {({ handleSubmit, form, submitting, pristine }) => (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                          <Field component={"textarea"} name="newPostText" placeholder="Enter your message"/>
//                          </div>
//                    <div>
//                     <button disabled={submitting} >Send</button>
//                     <button
//                         type="button"
//                         disabled={pristine || submitting}
//                         onClick={form.reset}
//                     >
//                         Clear</button>
//                    </div>
//             </form>
//         )}
//     </Form>
// )

export default Dialogs;
