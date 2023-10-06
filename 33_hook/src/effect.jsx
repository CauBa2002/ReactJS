import { useState } from "react"
import Resize from './Resize'
// import CallBack from "./CallBack"

function Effect(){
    const [show, setShow] = useState(false)
    return(
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Resize />}
        </div>
    )
}

export default Effect;