import React from 'react'
import style from './Home.module.scss'
import Fsection from './components/fsection/Fsection'
import Ssection from './components/ssection/Ssection'

const Home = () => {
    return (
        <div className={style.main}>
            <Fsection/>
            <Ssection/>
        </div>
    )
}

export default Home