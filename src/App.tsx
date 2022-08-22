import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type FilterType = "All" | "Active" | "Completed"

function App() {


    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS2", isDone: false}
    ])

    let [filterValue, setfilterderTasks] = useState("All")
    let filterderTasks = tasks1
    if (filterValue === 'Active') {
        filterderTasks = tasks1.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        filterderTasks = tasks1.filter(el => el.isDone)
    }


    const removeTask = (tasksid: number) => {
        setTasks1(tasks1.filter((el) => el.id !== tasksid))
    }


    const FilderButton = (filterVal: string) => {
        setfilterderTasks(filterVal)
        console.log(filterVal)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filterderTasks}
                      removeTask={removeTask}
                      FilderButton={FilderButton}


            />
        </div>
    );
}

export default App;
