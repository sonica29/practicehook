import { useRef } from "react"

const RefHook=()=>{
    const count=useRef(0)
    const color=useRef("black")
    const h4Tag = useRef();
    const changeColor = () => {
        count.current++;
        console.log(count.current)
        h4Tag.current.style.color = color.current;
    }
    return(
        <div id="a" style={{border:"1px solid white"}}>
        <h4 ref={h4Tag}>USEREF</h4>
        <input type="text" onChange={(e)=>{color.current=e.target.value}}></input>
        <button onClick={changeColor}>CLICK ME TO CHANGE color</button>
        Number of time you clicked {count.current}<br></br>
        Check console.My value is updating but Ref is not causing re render
        <br></br>
        <strong>USE FOR DOM REFERNCE</strong>
        </div>
    )
}
export default RefHook