import { useLayoutEffect, useState } from "react";
//import { useEffect } from "react";

function Count(){
    const [Count, setCount] = useState(0)

    const HandleCount = () => {
        setCount(Count + 1)
    }

    useLayoutEffect(() => {
        if( Count > 3){
            setCount(0)
        }
    }, [Count])

    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={HandleCount}>Click</button>
        </div>
    )
}

export default Count;