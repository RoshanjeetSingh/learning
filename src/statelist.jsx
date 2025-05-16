import React,{useState} from "react"
function StateList(){

    const [friends, setfriends] = useState(["naresh", "aakash", "vansh"]);
    function addfriend(){
        const newfriend = document.getElementById("inputName").value;
        document.getElementById("inputName").value = "";

       newfriend  ?setfriends(f =>[...f,newfriend]): "empty field";
    }
    function removefriend(index){
        setfriends(friends.filter((_,i)=> i !== index));
    }

    return(<div>
        <h1>FRIENDLIST</h1>
        <ul>
            {friends.map((friend,index) => <li key={index} onClick={()=> removefriend(index)}>
                
                {friend}</li>         )}
        </ul>
        <div>
            <input type="text"  id="inputName"/>
            <button onClick={addfriend} >add</button>
        </div>
    </div>
    );
}
export default StateList