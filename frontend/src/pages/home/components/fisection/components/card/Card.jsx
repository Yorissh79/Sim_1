import React from 'react'
import style from './Card.module.scss'
import { IoPricetagOutline } from "react-icons/io5";

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.imgbox}>
                <img src={item.image} alt="" /> 
            </div>
            <div className={style.text}>
                <p>Black Iace Heels</p>
                <div className={style.in}>
                    <IoPricetagOutline/>
                    <p>$189.00</p>
                </div>
            </div>
        </div>
    )
}

export default Card