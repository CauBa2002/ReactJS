import { useEffect, useState } from "react";

//Clean up function luôn được gọi trước khi callbakc được gọi (trừ lần component được Mounted)

function Clean(){
    const [Count, setCount] = useState(0)

    useEffect(() => {
        console.log('Mounted or Re-render')

        //Clean up
        return () => {
            console.log('Clean up')
        }
    }, [Count])

    return(
        <div>
            <h1 style={{padding:32}}>{Count}</h1>
            <button onClick={() => setCount(Count + 1)}>Plus</button>
            <button 
                style={{marginLeft:16}}
                onClick={() => setCount(Count - 1)}>Minus</button>
        </div>
    )
}

export default Clean