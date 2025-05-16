import React,{useState} from "react"
import './count.css'

function Counter(){

    const [count, setcount] = useState(0)

    const incriment = () => {
        setcount(count+1)
    }
    const dicriment = () => {
        setcount(count-1)
    }
    const reset = () =>{
        setcount(0)
    } 

    return(
  <>
  <h2>{count}</h2>
    <button className="buttonchover" onClick={incriment}>
    incriment</button>
  <button className="buttonchover" onClick={dicriment}>
    dicriment</button>
  <button className="buttonchover" onClick={reset}>
    reset</button>
  </>
    )
}
export default Counter