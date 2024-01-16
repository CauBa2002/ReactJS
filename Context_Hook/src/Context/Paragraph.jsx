// eslint-disable-next-line react/prop-types
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph(){

    const context  = useContext(ThemeContext)
    
    return(
        <p className={context.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, adipisci officiis illo mollitia corporis ducimus dolorem odio molestiae aliquam laborum in eveniet odit labore dolor, fuga ipsa molestias? Aut, maiores.
        </p>
    )
}

export default Paragraph