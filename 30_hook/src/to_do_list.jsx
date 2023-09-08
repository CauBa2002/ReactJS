import { useState } from 'react'

function ToDoList(){
    const storageItem = JSON.parse(localStorage.getItem('items'))

    const [item, setItem] = useState('')
    const [items,setItems] = useState(storageItem ?? [])

    const handleSubmit = () => {
        // setItems(prev => [...prev, item])
        setItems (prev => {
            const newItems = [...prev, item]
            
            const jsonItems = JSON.stringify(newItems)
            
            localStorage.setItem('items', jsonItems)
            
            return newItems
        })
        setItem('') 

    }

    return (
        <div style={{padding:32}}>
            <input
                value={item}
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}                
            </ul>
        </div>
    )
}

export default ToDoList;