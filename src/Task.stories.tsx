import React from 'react';
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Task Component',
    component: Task
}
const changeTaskStatusCallback = action('Button add was pressed inside the from')
const removeTaskCallback = action('Button add was pressed inside the from')
const  changeTaskTitleCallback = action('Button add was pressed inside the from')

export const TaskBaseExample = (props: any) => {
    return <>
        <Task
            task={{id: '1', isDone: true, title: 'CSS'}}
            changeTaskStatus={changeTaskStatusCallback}
            removeTask={removeTaskCallback}
            todolistId={"todolistId1"}
            changeTaskTitle={changeTaskTitleCallback}
        />
        <Task
            task={{id: '2', isDone: false, title: 'JS'}}
            changeTaskStatus={changeTaskStatusCallback}
            removeTask={removeTaskCallback}
            todolistId={"todolistId2"}
            changeTaskTitle={changeTaskTitleCallback}
        />
    </>
}