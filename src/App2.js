import { useState,useEffect } from "react";

let App2=()=>{
    let [c,setc]=useState(0)
    let inc=()=>{
        setc(c+1)
    }
    useEffect(()=>{
        console.log("inc c")
    },[c])
    return(
        <div>
        <div>{c}</div>
        <button onClick={inc}>inc</button>
        </div>
    )
}
export default App2