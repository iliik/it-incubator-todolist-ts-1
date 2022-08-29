import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterType = "All" | "Active" | "Completed"

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS2", isDone: false}
    ])

    const addtask = (inpunValue: string) => {
        const newTask = {id: v1(), title: inpunValue, isDone: false}
        setTasks([newTask, ...tasks])

    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }

    return (
        <div className="App">

            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      addtask={addtask}/>
        </div>
    );
}

export default App;
