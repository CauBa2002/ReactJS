import { useCallback, useState } from "react"
import Content from "./Content"

// 1. memo() -> Higher Order component (HOC)
// 2. useCallBack()

// Hooks
// HOC
// Render props

function Memo(){
    const [Count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return(
        <div>
            <Content onIncrease={handleIncrease}/>
            <h1 style={{padding: 12}}>{Count}</h1>
            
        </div>
    )

}

export default Memo