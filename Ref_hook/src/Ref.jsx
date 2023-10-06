import { useEffect } from "react";
import { useRef, useState } from "react";

function Ref(){

    const [Count, setCount] = useState(60)

    const TimeId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = Count
    }, [Count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
         console.log(rect)
    })

    const handleStart = () => {
        TimeId.current = setInterval(()=> {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start -> ', TimeId.current)

        return(() => {

        })
    }

    const handleEnd = () => {
        clearInterval(TimeId.current)
        console.log('Start -> ', TimeId.current)
    }

    console.log(prevCount.current, Count)

    return(
        <div>
            <h1 ref={h1Ref}>{Count}</h1>
            <button onClick={handleStart} style={{marginRight: 16}}>Start</button>
            <button onClick={handleEnd}>End</button>
        </div>
    )

}

export default Ref;