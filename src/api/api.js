import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
});

export const UserAPI = {
 getUsers(currentPage = 1, pageSize = 1){
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    });
},
follow(id){
  return instance.post(`follow/${id}`,
      {},
      {
        withCredentials: true,
        
      }
    )
    .then(response => {
      return response.data;
    });
},

unfollow(id){
    return instance.delete(`follow/${id}`,
        
        
      )
      .then(response => {
        return response.data;
      });
  },
  getProfile(userId){
    return ProfileAPI.getProfile(userId)
  
  },
  

  
}

export const ProfileAPI = {
 
   getProfile(userId){
     return instance.get(`profile/${userId}`,{
           withCredentials: true
       }
       )
   },
   getStatus(userId){
    return instance.get('profile/status/'+userId)
  },
  updateStatus(status,userId){
    return instance.put('profile/status',{status})
  }
   
 }



export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  },
  login(email,password,rememberMe =false){
    return instance.post('auth/login',{email,password,rememberMe})
  },
  logout(){
    return instance.delete('auth/login')
  }
}