import React,{useState,useEffect} from "react";
function Watch(){

    const [time, settime] = useState(new Date())

    useEffect(()=>{
        const intervalid = setInterval(()=>{
            settime(new Date())
        },1000)
        return()=>{
            clearInterval(intervalid)
        }
    })

    function updatetime(){
        const hours = time.getHours();
        const minuts = time.getMinutes();
        const seconds = time.getSeconds();
        const meridean = hours >= 12 ? "pm":"am";


        return(`${intzero(hours)}:${intzero(minuts)}:${intzero(seconds)}  ${meridean}`)
    }
    function intzero(number){
        return (number <10 ? "0": "")+number
    }
    return(<dov>
        <span>{updatetime()}</span>
    </dov>);
}
export default Watch