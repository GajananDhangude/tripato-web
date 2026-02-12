import axios from "axios";


const api = axios.create({
    baseURL:'http://localhost:8080/api',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
})



//auth 

export const registerUser = (userData) => api.post("/register" ,  userData)
export const loginUser = (userData) => api.post("/login" , userData)
export const logoutUser = () => api.get("/logout")

//listings

export const getAllListings = () => api.get("/listings")
export const getListing = (id) => api.get(`/listings/${id}`)


export default api;