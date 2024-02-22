import { useState,useEffect } from "react";

let App1=()=>{
    let [time,settime]=useState(new Date())
    useEffect(()=>{
        setInterval(fun,1000)
    },[])
    let fun=()=>{
        settime(new Date())
    }
    return(
        <div>
            {time.toLocaleTimeString()}
        </div>
    )
}
export default App1