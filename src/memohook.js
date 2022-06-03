import { useMemo, useState } from "react"
//useMemo is used to memoize expensive functions to avoid having to call them on every render.
//only use when function is very slow or referential equality
//returns only the value of the function
//LAZY EVALUATION:EVALUATE ONLY WHEN NEEDED
const MemoHook=()=>{
    const [num,setNum]=useState(0)
    const [inc, setInc] = useState(0);
    const mul=(a)=>{
        console.log("I am running")
        return a*1000
    }
    
    const multiply=useMemo(()=> mul(num),[num])
   
    return (
        <div id="a" style={{border:"1px solid white"}}>
            <h4>USEMEMO</h4>
            <input type="text" value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
            <br></br>
            <button onClick={()=>{setInc(inc+1)}}>re render</button>

            inc is {inc}
            <br></br>
            mul is {multiply}
            <br>
            </br>
            (only when input changes it will rerender not when inc changes .Check console )
        </div>
    )

}

//https://www.youtube.com/watch?v=THL1OPn72vo

export default MemoHook