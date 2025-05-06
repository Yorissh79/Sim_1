import React from 'react'
import style from './Card.module.scss'
import { IoPricetagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { postProductThunk } from '../../../../../../redux/reducers/basketSlice';

const Card = ({item, who}) => {

    const dispatch = useDispatch()
    // const data = useSelector(state => state.basket.data)

    const deleteItem = () => {

    }

    const addBasket = () => {
        dispatch(postProductThunk(item))
    }

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
                {who == "del" ? <button>Delete</button> : ""}
                {who == "add" ? <button onClick={() => addBasket()}>Add to basket</button> : ""}
            </div>
        </div>
    )
}

export default Card