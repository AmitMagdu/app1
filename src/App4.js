import { useReducer } from "react"

const App4=()=>{
    let [state,dispatch]=useReducer((state,action)=>{
        if(action.type=='data'){
            return{...state,'data':action.payload}
        }
        else{
            return{'arr':[...state.arr,state.data],"data":""}
        }
    },{"data":"","arr":""})
    return(<div>
        <input type="text" onChange={((e)=>dispatch({'type':'data','payload':e.target.value}))} value={state.data}/>
        <button onClick={(()=>dispatch({'type':'arr'}))}>Add</button>
        <div>
            {
                state.arr.map((item)=><li>{item}</li>)
            }
        </div>
    </div>)
}
export default App4