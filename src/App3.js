import { useState,useEffect } from "react";
let App3=()=>{
    let [c1,setc1]=useState(0)
    let [c2,setc2]=useState(0)
    let ic1=()=>{
        setc1(c1+1)
    }
    let ic2=()=>{
        setc2(c2+1)
    }
    useEffect(()=>{
        console.log("inc c")
    },[c1,c2])
    
    return(
        <div>
            <div>{c1}</div>
            <button onClick={ic1}>inc c1</button>
            <div>{c2}</div>
            <button onClick={ic2}>inc c2</button>
        </div>
    )
}
export default App3