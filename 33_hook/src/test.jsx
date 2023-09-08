import { useEffect } from "react";
import { useState } from "react";

//1. useEffect(callback)
// - Gọi callback mỗi khi component re render
// - Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

const tabs = ['posts', 'comments', 'albums']

function Test(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [name, getName] = useState('posts')
    useEffect(() => {
        // 1. Example, useEffect(callback) sau khi component mounted
        // document.title = title
        // 2. Example
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(posts => {
        //         setPosts(posts);
        //     } )
        // 3. Example
        fetch(`https://jsonplaceholder.typicode.com/${name}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            } )
    }, [name])

    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={name === tab ? {
                        color : '#333',
                        backgroundColor : '#green',
                    } : {}}
                    onClick={() => getName(tab)}>
                    {tab}
                </button>
            ))}
            {console.log(name)}
            <input type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Test;