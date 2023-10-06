import { useEffect, useState } from "react";

function Preview() {
    const [Image, setImage] = useState()

    useEffect(() => {
        //clean up
        return() => {
            Image && URL.revokeObjectURL(Image.preview)
        }
    }, [Image])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        
        setImage(file)
    }

    return(
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar} 
                />
            {Image && (
                <img src={Image.preview} alt="" width="300px" />
            )}
        </div>
    )
}

export default Preview