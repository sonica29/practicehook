import { useEffect, useState } from "react"

const EffectHook=()=>{
    const [col,setCol]=useState("")
    useEffect(()=>{ //only rerenders when thi sparticular component state or props changes
        document.getElementById("a").style.color="#"+col
    },[col])
    return(
        <div id="a" style={{border:"1px solid white"}}>
        <h4>USEEFFECT</h4>
            <button onClick={()=>setCol(Math.floor(Math.random()*16777215).toString(16))}>change color</button>
            this is a div where use effect is being used
        </div>
    )
}
export default EffectHook