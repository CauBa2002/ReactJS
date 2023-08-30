import { useState } from 'react'
import './App.css'

const gifts = [
    'CPU i9',
    'Ram 32GB RGB',
    'RGB Keyboard'
  ]

function Gifts(){
    const [gift, setGift] = useState()

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }
    return(
        <div style={{padding : 32}}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy phần thưởng</button>
        </div>
    )
}


export default Gifts;