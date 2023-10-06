import { useState } from "react";
//import Clean from "./Clean";
import Preview from "./Preview";

function Hooks(){
    const [Show, setShow] = useState(false)
    return(
        <div style={{padding:32}}>
            <button onClick={() => setShow(!Show)}>Toggle</button>
            {Show && <Preview />}
        </div>
    )
}

export default Hooks