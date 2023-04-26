import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
});

export const getUsers = (currentPage = 1, pageSize = 1) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    });
};
export const follow = (id) => {
  return instance.post(`follow/${id}`,
      {},
      {
        withCredentials: true,
        
      }
    )
    .then(response => {
      return response.data;
    });
};

export const unfollow = (id) => {
    return instance.delete(`follow/${id}`,
        
        {
          withCredentials: true,
          
        }
      )
      .then(response => {
        return response.data;
      });
  };
  
