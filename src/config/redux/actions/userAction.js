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

}