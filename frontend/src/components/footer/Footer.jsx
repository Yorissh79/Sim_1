import React from 'react'
import style from './Footer.module.scss'
import { BiHeart } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className={style.main}>

            <p>Copyright ©2025 All rights reserved | This template is made with <BiHeart color='#f41068'/> by <a href="#">Colorlib</a></p>

        </div>
    )
}

export default Footer