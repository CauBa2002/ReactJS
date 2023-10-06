import { useState, useMemo, useRef } from "react"

function Memo(){

    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...Products, {
            Name,
            Price : +Price
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const Total = useMemo(() => {
        const result = Products.reduce((result, prop) => {
        
            console.log('Tính tiền lại...')
    
            return result + prop.Price
        }, 0)
        return result
    }, [Products])

    // const Total = Products.reduce((result, prop) => {
        
    //     console.log('Tính tiền lại...')

    //     return result + prop.Price
    // }, 0)

    return (
        <div>
            <input
                ref={nameRef}
                style={{
                    width:300,
                    height: 32,
                    padding: 8
                }}
                type="text"
                value={Name} 
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                style={{
                        width:300,
                        height: 32,
                        padding: 8
                    }}
                type="text" 
                value={Price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            <p>Total: {Total}</p>
            <br />
            <ul>
                {Products.map((Product, index) => (
                    <li key={index}>{Product.Name} - {Product.Price}</li>
                ))}
            </ul>
        </div>
    )

}

export default Memo

