function logger(Reducer){
    return(prevState, action)=>{
        console.group(action.type)
        console.log('Prev state : ', prevState)
        console.log('action', action)

        const nextState = Reducer(prevState, action)
        
        console.log('Next state : ', prevState)
        console.groupEnd()
        return nextState
    }
}


export default logger