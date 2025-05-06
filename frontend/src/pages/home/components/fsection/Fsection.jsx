import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
        <div className={style.main} id='/home'>
            <div className={style.imgbox}>
              <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
            </div>

            <div className={style.text}>
                <p className={style.f}><span>Flat</span> 75%Off</p>
                <p className={style.s}>It’s Happening <br/> this Season!</p>
                <button>purchase now</button>
            </div>

        </div>
    )
}

export default Fsection