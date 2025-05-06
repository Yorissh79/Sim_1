import React from 'react'
import style from './Ssection.module.scss'

const Ssection = () => {
    return (
        <div className={style.main} id='/category'>
            <p className={style.f}>Shop for Different Categories</p>
            <p className={style.s}>Who are in extremely love with eco friendly system.</p>

            <div className={style.cards}>
                <div className={style.left}>
                  <div className={style.top}>
                    <div className={style.imgbox}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" /> 
                        <div className={style.fade}>
                          <p>Product For Women</p>
                        </div>
                    </div>
                    <div className={style.imgbox}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
                        <div className={style.fade}>
                          <p>Product for Couple</p>
                        </div>
                    </div>
                  </div>

                  <div className={style.bottom}>
                    <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" /> 
                    <div className={style.fade}>
                        <p>Shop Now</p>
                    </div>
                  </div>
                </div>
                <div className={style.right}>
                    <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />
                    <div className={style.fade}>
                        <p>Product For Men</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ssection