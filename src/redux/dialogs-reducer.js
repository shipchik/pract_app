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
    switch(action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody='';

            state.MessageData.push({id: 5, message:action.body});
            rerenderTree();
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY': 
            
            state.newMessageBody = action.body;
            rerenderTree();
            return state;
        default :
            return state;
    }
    
    
}



export const sendMessageCreator = (body) => ({type: SEND_MESSAGE,body:body})
export const updateNewMessageBodyCreator = (body) =>
({type:'UPDATE-NEW-MESSAGE-BODY',body:body})


export default dialogsReducer