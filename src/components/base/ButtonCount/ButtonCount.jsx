import React, { Fragment } from 'react'
import style from './ButtonCount.module.css'

export const ButtonCount = (props) => {
    return (
        <Fragment>
            <div className={`d-flex fw-bold ps-lg-0 ${style.wrapper}`}>
                <button className={`btn pt-0 pb-0 me-3 ${style.btnCount} ${style.minus}`} onClick={() => props.minus()}>-</button>
                <span>{props.count}</span>
                <button className={`btn pt-0 pb-0 ms-3 ${style.btnCount} ${style.plus}`} onClick={() => props.plus()}>+</button>
            </div>
        </Fragment>
    )
}
