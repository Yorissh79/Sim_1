import React from 'react'
import style from './Fisection.module.scss'
import Card from './components/card/Card'

const Fisection = () => {

    const data = [
        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },

        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },
        
        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },

        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },
                {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },

        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },
        
        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        },

        {
            "image": "https://preview.colorlib.com/theme/shop/img/r1.jpg"
        }
    ]

    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>Related Searched Products</p>
                <p className={style.s}>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className={style.cards}>
                {data?.map(item => <Card item={item} who={"add"}/>)}
            </div>
        </div>
    )
}

export default Fisection