import React from 'react'

export const ButtonAuth = (props) => {
    return (
        <div className="mt-1">
            <button type="submit" className="btn submit">{props.text || "PRIMARY"}</button>
        </div>
    )
}
