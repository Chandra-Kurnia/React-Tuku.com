import React from 'react'

export const ColorPicker = (props) => {
    const handleEmpty = (e) => {

    }
    const color = `color${props.color}`
    const check = `check${props.color}`
    return (
        <div className="me-3">
            <input type={props.type || "checkbox"} class={`d-none ${check}`} id={color} autocomplete="off" value={color} name="colorpicker" onClick={e => props.value(e) || handleEmpty(e)}></input>
            <label class={`colorPicker ${color}`} for={color}></label>
        </div>
    )
}
