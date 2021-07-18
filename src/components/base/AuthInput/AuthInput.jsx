import React from 'react'
import style from './authInput.module.css'

export const AuthInput = (props) => {
    return (
        <div className={`input-group mb-3 mt-1 auth-input-wrapper w-100`}>
            <input type={props.type || "text"} name={props.name} class="form-control input-auth" placeholder={props.placeholder} value={props.value || ""} aria-label="name" aria-describedby="basic-addon1"></input>
        </div>
    )
}