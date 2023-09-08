import { useState } from "react";
import Test from "./test";

function Effect(){
    const [show, setShow] = useState(false)
    return(
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Test />}
        </div>
    )
}

export default Effect;