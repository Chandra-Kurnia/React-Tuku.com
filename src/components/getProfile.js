/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../config/redux/actions/userAction";
// import { useSelector } from "react-redux";

const GetUserProfile = (props) => {
    // const {profile} = useSelector(state => state.user)
    // console.log(profile);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    return <> {props.children} </>
}

export default GetUserProfile