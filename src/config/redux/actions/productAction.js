import axios from "axios";

const getProduct = () => async ( dispatch ) => {
    await axios.get(`http://localhost:4000/v1/product`)
    .then((res) => {
        // console.log(process.env.REACT_APP_SERVER_URL);
        dispatch({type: 'getAllProduct', payload: res.data.data})
    })
}

export default getProduct;