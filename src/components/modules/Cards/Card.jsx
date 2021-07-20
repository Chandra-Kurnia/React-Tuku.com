import React from 'react'
import style from './Card.module.css'
import { Link } from "react-router-dom";

export const Card = (props) => {
    return (
        <div className={`cards mt-2 me-3 ${style.cardWrapper}`}>
                <img src={props.src} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Link to={`/product/${props.id}`}>{props.title}</Link><br />
                        <span className={style.price}>${props.price}</span><br />
                        <span className={style.shop}>{props.store}</span><br />
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                        <span className={`fa fa-star starChecked`}></span>
                    </div>
        </div>
    )
}
