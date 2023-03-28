import axios from "../axios"
const handleLogin = (email,password)=>{
    return axios.post('/api/login',{email,password})
}
const getAllUsers = (type)=>{
    return axios.get(`/api/get-all-users?type=${type}`)
}
const deleteUsers = (id)=>{
    return axios.delete(`/api/delete-user?id=${id}`)
}
const createUser = (data)=>{
    return axios.post('/api/create-new-user',data)
}
const updateUsers = (data)=>{
    return axios.post('/api/update-user',data)
    
}

export  {handleLogin,getAllUsers,deleteUsers,createUser,updateUsers}   