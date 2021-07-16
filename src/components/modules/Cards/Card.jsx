import React from 'react'
import style from './Card.module.css'

export const Card = () => {
    return (
        <div className={`cards mt-2 me-3 ${style.cardWrapper}`}>
                <img src="https://placeimg.com/640/480/any" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <a href="/product/id">Men's Formal suit - Black white</a><br />
                        <span className={style.price}>$40.0</span><br />
                        <span className={style.shop}>Zalora Cloth</span><br />
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                    </div>
        </div>
    )
}
