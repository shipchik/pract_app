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
    return instance.get(`profile/${userId}`,{
          withCredentials: true
      }
      )
  },
  
}


export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  }
}