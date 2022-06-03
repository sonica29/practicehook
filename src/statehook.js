import { useState } from "react"
import { myreducer } from "./reducerhook"
import { useReducer } from "react"


const StateHook=()=>{
const [count,setCount]=useState(0)
const [state,dispatch]=useReducer(myreducer,5)
const [detail,setDetail]=useState({
    name:"Sonica",
    other:{
        age:23,
        address:"paota"
    }
})
return(
    <div style={{border:"1px solid white"}}>
        <h4>USESTATE</h4>
        
    <button onClick={()=>{dispatch({type:"inc"});setCount(count+1);setCount((prev)=>prev+1)}}>INCREMENT</button>
    {/*the state update is asynchronous (the state variable is updated after re-rendering*/}
    {count}
    <br></br> I am from reducer  {state}
    <br></br>
    <button onClick={()=>{
        const a={other:{age:"24"}}
        setDetail({...detail,name:"sonu",other:{age:"24"}})
        }}>show</button> 
    {detail.other.age} 
    {detail.name} 
    {detail.other.address} 
    </div>
) 
}

export default StateHook