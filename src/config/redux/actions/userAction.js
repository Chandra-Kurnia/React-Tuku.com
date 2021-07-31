import axios from "axios";

export const login = (data) => async (dispatch) => {
    try{
        const form = {email: data.email, password: data.password, roles: data.roles}
        const result = await axios.post('http://localhost:4000/v1/users/login', form)
        const payload = result.data
        dispatch({type: "login", payload})
        localStorage.setItem('token', payload.data.token)
    }catch(error){
        console.log(error)
        console.log('errorrr')
    }
}

export const register = data => async (dispatch) => {
    try{
        const form = {owner: data.owner, name: data.name, email: data.email, phoneNumber: data.phoneNumber, storeName: data.storeName, pass: data.pass}
        if(data.roles == "customer"){
            const result = await axios.post('http://localhost:4000/v1/users',  form)
            console.log(result);
        }else{
            const result = await axios.post('http://localhost:4000/v1/store', form)
            console.log(result);
        }
    }catch(error){
        
    }
}