import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = "All" | "Active" | "Completed"

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS2", isDone: false}
    ])

    const removeTask = (tasksid: number) => {
        setTasks(tasks.filter((el) => el.id !== tasksid))
    }

    return (
        <div className="App">

            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
