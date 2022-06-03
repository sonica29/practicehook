import { createContext, useContext } from "react"
const Parent=()=>{
   
    return(
        <div>
            Start
            <Child></Child>
            End
        </div>
    )
}

const Child=()=>{

    const myValue=useContext(MyContext)
    return (
        <p>${myValue}</p>
    )
}
const MyContext=createContext()
const ContextHook=()=>{
    return(
        <MyContext.Provider value="I am Child. My value is coming from context">
        <div style={{border:"1px solid white"}}>
        <h4>USECONTEXT</h4>
            <Parent>
            </Parent>
            
        </div>
        </MyContext.Provider>
    )
}
export default ContextHook