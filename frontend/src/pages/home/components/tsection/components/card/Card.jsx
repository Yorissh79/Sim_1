import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.imgbox}>
                <img src={item.image} alt="" /> 
            </div>

            <div className={style.text}>
                <p className={style.f}>Long Sleeve shirt</p>
                <p className={style.s}>$150.00</p>
            </div>

            <div className={style.overlay}>
              
            </div>

        </div>
    )
}

export default Card