import React,{useState} from "react";

function Welcome(){
    const [name,setName] = useState("Jarald")
    return (
        <>
        <h1>Welcome {name}</h1>
        <Child changeName={setName}/>
        </>
    )
}
function Child(props){
    return (
        <>
            <h2>Hi, Hello</h2>
            <button onClick={()=>props.changeName("Jara")}>Click</button>
        </>
    )
}





export default Welcome