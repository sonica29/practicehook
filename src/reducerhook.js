import { useReducer } from "react"
export const myreducer=(state,action)=>{
switch(action.type){
    case "inc":return state+1
    case "dec":return state-1
    default: return 0
}
} //can import in other files and use with use reducer

const ReducerHook=()=>{
    const [state,dispatch]=useReducer(myreducer,0)
    return(
        <div id="a" style={{border:"1px solid white"}}>
        <h4>USEREDUCER</h4>
            <button onClick={()=>dispatch({type:"inc"})}>inc</button>
            <br></br>
            <button onClick={()=>dispatch({type:"dec"})}>dec</button>
            {state}
        </div>
    )
}
export default ReducerHook