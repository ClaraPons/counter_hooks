import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    
    const handleMaxClick = () =>{
        setCount(count + 1)
    }

    const handleMinClick = () =>{
        if(count > 0){
        setCount(count - 1)
        }
    }

    return(
        <>
            <button onClick={handleMaxClick}>+</button>
            <h2>{count}</h2>
            <button onClick={handleMinClick}>-</button>
        </>
    )
}

export default Counter 