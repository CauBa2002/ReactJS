import { useState } from "react"
import Timer from "./Timer"

function Hook(){
    const [Show, setShow] = useState(false)
    return(
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!Show)} >Toggle</button>
            {Show && <Timer/>}
        </div>
    )
}

export default Hook