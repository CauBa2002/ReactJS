import { useEffect, useState } from "react";

const lessons = [{
        id: 1,
        name: 'ReactJS là gì ? Tại sao nên học ReactJS ?'
    },{
        id: 2,
        name: 'SPA/MPA là gì ?'
    },{
        id: 3,
        name: 'Arrow function'
    }]

function Chat(){
    const [lessonID, setLessonID] = useState(1)

    useEffect(() => {

        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonID}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonID}`, handleComment)
        }
    }, [lessonID])

    return(
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonID === lesson.id ? 'cyan' : '#ddd'
                        }}
                        onClick={() => setLessonID(lesson.id)}>
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Chat;