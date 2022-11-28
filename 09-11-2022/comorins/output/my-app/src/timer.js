import React,{useState} from "react";

function Timer(){
    const [counts, setCounts] = useState(0)
    return(
        <>
        <h2>{counts}</h2>
        <button onClick={(()=>{setInterval(setCounts(counts+1))},100)}>Start</button>
        <button onClick={()=>setCounts()}>Stop</button>

    </>
    )
}
export default Timer