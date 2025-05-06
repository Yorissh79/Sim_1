import React from 'react'
import style from './Tsection.module.scss'
import Card from './components/card/Card'

const Tsection = () => {

    const data = [
        {
            image: "https://preview.colorlib.com/theme/shop/img/l1.jpg"
        },
        {
            image : "https://preview.colorlib.com/theme/shop/img/l2.jpg"
        },
        {
            image : "https://preview.colorlib.com/theme/shop/img/l3.jpg"
        },
        {
            image : "https://preview.colorlib.com/theme/shop/img/l4.jpg"
        }
    ]

    return (
        <div className={style.main}>

            <div className={style.overlay}>
            </div>

            <div className={style.text}>
                <p className={style.f}>New realeased Products for Men</p>
                <p className={style.s}>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className={style.cards}>

                {data?.map((item) => <Card item={item}/>)}

            </div>

        </div>
    )
}

export default Tsection