import { useState } from "react";
import Count from "./Count";

function Hooks(){
    const [Show, setShow] = useState(false)

    return(
        <div style={{padding : 32}}>
            <button onClick={() => setShow(!Show)}>Toggle</button>
            {Show && <Count/>}
        </div>
    )
}

export default Hooks;