import { useState } from 'react'

const courses = [
    {
        id : 1,
        name : 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function Two_way(){
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const handleSubmit = () => {
    //     console.log({
    //         name,
    //         email
    //     })
    //     setName('Trần Văn Đạt')
    //     setEmail('dattran0204@gmail.com')
    // }
    // return(
    //     <div style={{padding : 32}}>
    //         <input type="text" 
    //             value={name}
    //             onChange={e => setName(e.target.value)}
    //         />
    //         <input type="text" 
    //             value={email}
    //             onChange={e => setEmail(e.target.value)}
    //         />
    //         <button onClick={handleSubmit}>Submit</button>
    //     </div>
    // )

    const [checked, setChecked] = useState([])
    const handleSubmit = () => {
        console.log({id : checked})
    }

    const handleChecked = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if(isChecked){
                return checked.filter(item => item !== id)
            }
            else{
                return [...prev, id]
            }
        })
    }
    return(
        <div style={{padding: 32}}>
            {courses.map(courses => (
                <div key={courses.id}>
                    <input type="checkbox"
                        checked={checked.includes(courses.id)}
                        onChange={() => handleChecked(courses.id)}
                    />
                    {courses.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Two_way;