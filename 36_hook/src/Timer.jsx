import { useEffect, useState } from "react"

function Timer(){
    const [CountDown, setCountDown] = useState(180)

    useEffect(() => {
        const TimerID = setInterval(() => {
            setCountDown(prevState => prevState - 1)
            console.log('CountDown : ', CountDown)
        }, 1000)
        return () => clearInterval(TimerID)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCoundDown(CountDown - 1)
    //     }, 1000)
    // }, [CountDown])

    return(
        <div>
            <h1>{CountDown}</h1>
        </div>
    )
}

export default Timer;