//only use when we have referential equality and creating function is very very slow
//returns the entire function
//LAZY EVALUATION:EVALUATE ONLY WHEN NEEDED
    import React, { useState, useCallback } from 'react'
    import List from './List'
const CallbackHook=()=>{
    const [number,setNumber]=useState(1)
    const [any,setAny]=useState()
    const getItems=useCallback(()=>{
        return [number,number+1,number+2]
    },[number])

return(
    <div id="a" style={{border:"1px solid white"}}>
    <h4>USECALLBACK</h4>
    <input type="number" value={number} onChange={(e)=>setNumber(parseInt( e.target.value))} ></input>
    <List getItems={getItems}></List>
    <button onClick={()=>setAny(Math.random())}>Toggle theme</button>{/* if we do not use callback on 
    clicking ths button List will also be re renders as getitems will be created everytimr*/}
    </div>
)
}


//https://www.youtube.com/watch?v=_AyFP5s69N4
export default CallbackHook