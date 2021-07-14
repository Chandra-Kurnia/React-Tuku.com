import React from 'react'

export const AuthInput = (props) => {
    return (
        <div className="input-group mb-3 mt-1 auth-input-wrapper">
            <input type={props.type || "text"} name={props.name} class="form-control input-auth" placeholder={props.placeholder} aria-label="name" aria-describedby="basic-addon1"></input>
        </div>
    )
}