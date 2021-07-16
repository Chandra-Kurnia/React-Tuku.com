import React, { Fragment } from 'react'
import style from './CheckBox.module.css'

export const CheckBox = () => {
    return (
        <Fragment>
            <input type="checkbox" className={`form-check-input ${style.checkBox}`} id="" />
        </Fragment>
    )
}
