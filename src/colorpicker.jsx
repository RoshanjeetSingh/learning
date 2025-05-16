import React,{useState} from "react";
function PickColor(){

    const [color , setcolor] =useState('#fff101')

   function ChangeClr(event){
    setcolor(event.target.value)
   }

return(
        <div>
            <h1 style={{backgroundColor: color}}>you picked {color}</h1>
            <div>
                <input type="color" value={color} onChange={ChangeClr}/>
            </div>
        </div>
)
}
export default PickColor