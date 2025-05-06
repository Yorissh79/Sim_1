import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.imgbox}>
                <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
            </div>

            <div className={style.pages}>
                <Link to={"/"} href="/home">Home</Link>
                <Link to={"/category"} href="/category">category</Link>
                <Link to={"/men"}>men</Link>
                <Link to={"/women"}>women</Link>
                <Link to={"/latest"}>latest</Link>
                <Link to={"/pages"}>
                    pages
                    <IoMdArrowDropdown/>
                    <ul className={style.page}>
                        <li>Category</li>
                    </ul>
                </Link>
            </div>
        </div>
    )
}

export default Header