import { useState } from "react";
import { useEffect } from "react";

function Resize(){
    const [Width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return() => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
    return(
        <div>
            <h1>Width is {Width}</h1>
        </div> 
    )
}

export default Resize;