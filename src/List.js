import { useEffect, useState } from "react"

const List=({getItems})=>{
    const [list,setList]=useState([])
    useEffect(()=>{
        setList(getItems())
        console.log("updating items")
    },[getItems])
    
     return(
         list.map(item=><div key={Math.random()}>{item}</div>)
     )
    
 }
 export default List