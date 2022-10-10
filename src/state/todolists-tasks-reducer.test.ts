import {TasksStateType, TodolistType} from "../App";
import {tasksReducer} from "./tasks-reducer";
import {AddTodolistAC, todolistsReducer} from "./todolists-reducer";

test('new property with new array should be added when new todolist is added', () => {
    const startState: TasksStateType = {}
    const startTodolistState: TodolistType[] = []

    const action = AddTodolistAC('title no matter')

    const endTasksState = tasksReducer(startState, action)
    const endTodolistsState = todolistsReducer(startTodolistState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id



    expect(idFromTasks).toBe(action.todolistId)
    expect(idFromTodolists).toBe(action.todolistId)
})