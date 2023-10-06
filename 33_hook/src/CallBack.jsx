import { useEffect } from "react";
import { useState } from "react";

//1. useEffect(callback)
// - Gọi callback mỗi khi component re render
// - Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// ------------------------------------------------
//1. Callback luôn được gọi sau khi component mounted
//2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'comments', 'albums']

function CallBack(){
    //const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [name, getName] = useState('posts')
    const [BtnGoToTop, setBtnGoToTop] = useState(false)
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

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300){
                setBtnGoToTop(true)
            } else{
                setBtnGoToTop(false)
            }
            //if(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener')
        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener')
        }
    }, [])

    const GotoTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

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
            {/* <input type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> */}
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
            {BtnGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                    onClick={GotoTop}
                    >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default CallBack;