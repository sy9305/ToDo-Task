import { useState } from "react";

export default function toDoList(){

    let [toDos, setToDos] = useState([""]);
    let [newToDo, setNewTask] = useState("");

    let addNewTask = () => {
        setToDos((prevToDo) => {
            return [...prevToDo, newToDo];
        });
        setNewTask("");
    };

    let updateToDoValue = (event) => {
        setNewTask(event.target.value);
    };


    return(
        <div>
            <input 
                placeholder ="Add a task" 
                value={newToDo} 
                onChange={updateToDoValue} 
            ></input>
            <br/>

            <button onClick={addNewTask} >Add Task</button>
            <br/> <br/> <br/>
            <hr></hr>

            <h4>Tasks To Do</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>;
                    })
                }
            </ul>

        </div>
    );
}