import React,{useState} from "react"
function Incre(){
    const [count, setCount] = useState(0)

    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Sub</button>

        </>
    )
}

export default Incre