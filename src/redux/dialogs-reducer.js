import { rerenderTree } from "..";

const SEND_MESSAGE = 'SEND-MESSAGE'



let initState = {
    
        MessageData: [
          { id: 1, message: "hi" },
          { id: 2, message: "How Are You" },
          { id: 3, message: "Hello" },
        ],
        dialogsData: [
          { id: 1, name: "Maxim" },
          { id: 2, name: "Lera" },
          { id: 3, name: "Anton" },
          { id: 4, name: "Katya" },
          { id: 5, name: "Vika" },
        ],
        newMessageBody: "",
      }








const dialogsReducer = (state = initState,action) => {

    let stateCopy = {
      ...state,
      
    }
    switch(action.type){
        case SEND_MESSAGE:
            debugger
            let body = state.newMessageBody;
            stateCopy.newMessageBody='';

            stateCopy.MessageData.push({id: 5, message:action.body});
            
            return stateCopy;
        case 'UPDATE-NEW-MESSAGE-BODY': 
            
        stateCopy.newMessageBody = action.body;
            
            return stateCopy;
        default :
            return state;
    }
    
    
}



export const sendMessageCreator = (body) => ({type: SEND_MESSAGE,body:body})
export const updateNewMessageBodyCreator = (body) =>
({type:'UPDATE-NEW-MESSAGE-BODY',body:body})


export default dialogsReducer