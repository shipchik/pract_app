import { rerenderTree } from "..";
import { authAPI } from "../api/api";
import image from './../img/unknown-avatar.jpeg'
import { getAuthUserData } from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'



let initState = {
    initialized:false

};

const appReducer = (state= initState ,action) => {

    switch (action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true
            }
        
        default :
            return state
    }
    

    
}

export const setInitializeSuccess = () => ({type:SET_INITIALIZED})

export const initialize = () => (dispatch) => {
    dispatch(getAuthUserData()).then(()=>{
        dispatch(setInitializeSuccess())
    })
    
}

// export const login = (email,password,rememberMe) => (dispatch) => {
//     authAPI.login(email,password,rememberMe).then(response => {
//         if(response.data.resultCode ===0){
//             dispatch(getAuthUserData())
//         }
//         else {
            
//             dispatch(setError(...response.data.messages))
//         }
//     })
// }

// export const logout = () => (dispatch) => {
//     authAPI.logout().then(response => {
//         if(response.data.resultCode ===0){
//             dispatch(setAuthUserData(null,null,null,false))
//         }
        
//     })
// }


export default appReducer