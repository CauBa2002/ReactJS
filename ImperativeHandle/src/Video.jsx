import { forwardRef, useImperativeHandle, useRef } from 'react'
import video from './video.mp4'

// eslint-disable-next-line react-refresh/only-export-components
function Video(props, ref){

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return(
        <video 
            src={video}
            ref={videoRef}
            width={280}
        />
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Video)