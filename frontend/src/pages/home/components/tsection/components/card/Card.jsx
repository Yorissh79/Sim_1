import React from 'react'
import style from './Card.module.scss'
import { BiHeart } from 'react-icons/bi'
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SlFrame } from "react-icons/sl";

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.imgbox}>
                <img src={item.image} alt="" /> 

                <div className={style.over}>
                    <div className={style.overlay}>

                        <div className={style.box}>
                            <BiHeart/>
                        </div>
                        <div className={style.box}>
                            <IoLayersOutline/>
                        </div>
                        <div className={style.box}>
                            <AiOutlineShoppingCart/>
                        </div>
                        <div className={style.box}>
                            <SlFrame/>
                        </div>
                    </div>
                </div>


            </div>

            <div className={style.text}>
                <p className={style.f}>Long Sleeve shirt</p>
                <p className={style.s}>$150.00</p>
            </div>



        </div>
    )
}

export default Card