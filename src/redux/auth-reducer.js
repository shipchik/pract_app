import { rerenderTree } from "..";
import image from './../img/unknown-avatar.jpeg'
import { authAPI } from "../api/api";



const SET_USER_DATA = 'SET_USER_DATA'



let initState = {
    userId:null,
    email:null,
    login: null,
    isAuth:false

      

};

const authReducer = (state= initState ,action) => {

    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true



            }
          
       
        default :
            return state
    }
    

    
}


export const setAuthUserData = (userId,email,login) => ({type:SET_USER_DATA, data: {userId,email,login  }})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0 ){
                  let {login,id , email} =response.data.data
                  
                  dispatch(setAuthUserData(id,email,login));

                }
            })
}


export default authReducer