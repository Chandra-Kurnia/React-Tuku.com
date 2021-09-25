import React from 'react'

export const AuthInput = (props) => {
    return (
        <div className={`input-group mb-3 mt-1 auth-input-wrapper w-100`}>
            <input id={props.id} type={props.type || "text"} name={props.name} class="form-control input-auth" placeholder={props.placeholder} defaultValue={props.value} aria-label="name" aria-describedby="basic-addon1" onChange={(e) => props.event(e)} required></input>
        </div>
    )
}