
import { combineReducers, createStore, } from "redux";

import { useDispatch } from "react-redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer
})


let store = createStore(reducers);


// let store = configureStore({
//     reducer:{
//         profilePage:profileReducer,
//         messagePage:dialogsReducer,
//         sidebar:sidebarReducer,
//     }
// })


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch




export default  store;