import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return(
        <>
        <header>Counter</header>
        <button onClick={()=>setCount((count)=> count + 1)}> + </button> {count} <button onClick={()=>setCount((count)=> count - 1)}> - </button>
        </>
    )
}

export default Counter