import React, { useEffect } from 'react'
import style from './Fosection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../redux/reducers/CardSlice'
import Card from './card/Card'

const Fosection = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.card.data)

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>New realeased Products for Women</p>
                <p className={style.s}>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className={style.cards}>
                {data?.map(item => <Card item={item}/>)}
            </div>
        </div>
    )
}

export default Fosection