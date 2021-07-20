import React from 'react'
import style from './Loader.module.css'
import loader from '../../../assets/images/Loading/Loader.gif'

export const LoaderPage = () => {
    return (
        <div className={style.loaderWrapper}>
            <div className={style.loader}>
                <img src={loader} alt="" />
            </div>
        </div>
    )
}
