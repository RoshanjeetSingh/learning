import React,{useState} from "react";
function ToDoList(){
     const [tasks ,settasks]= useState(['lern react','build project','deploy on netlify'])
    const[newtask,setnewtask] = useState("");
    function HandelInputTask(event){
        setnewtask(event.target.value);
    }
    function AddTask(){
        newtask ? settasks(t=> [...t,newtask]):null;
        setnewtask("")
    }
    function DeleteTask(index){
        const updatedtask = tasks.filter((_,i)=>i !==index);
        settasks(updatedtask)
    }

    return(
        <div>
            <h1>ToDoList</h1>
            <div>
                <input type="text" placeholder="enter task" 
                value={newtask} onChange={HandelInputTask}/>
                <button className="add-btn" onClick={AddTask}> add</button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                <li key={index}> <span className="text">{task}</span>
                <button onClick={()=> DeleteTask(index)}>delete</button>
                </li>
                
                )}
            </ol>

        </div>
    );
}
export default ToDoList