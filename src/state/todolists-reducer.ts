import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistACType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistACType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId : string
}
export type ChangeTodolistTitleACType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export type ChangeTodolistFilterACType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}
export type ActionType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType | ChangeTodolistFilterACType

export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case  'REMOVE-TODOLIST' : {
            return state.filter(tl => tl.id != action.id)
        }
        case 'ADD-TODOLIST' : {
            return [
                ...state, {
                    id: action.todolistId,
                    title: action.title,
                    filter: 'all'
                }]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }

        default:
            throw new Error('I don t understand this action type')
    }
}

export const RemoveTodolistAC = (todolistId: string):RemoveTodolistACType => {
    return {type:'REMOVE-TODOLIST', id:todolistId}
}
export const AddTodolistAC = (title:string):AddTodolistACType => {
    return {type:'ADD-TODOLIST',title, todolistId : v1()}
}
export const ChangeTodolistTitleAC = (id:string,title:string):ChangeTodolistTitleACType => {
    return {type:"CHANGE-TODOLIST-TITLE",id:id, title:title}
}
export const ChangeTodolistFilterAC = (id:string,filter:FilterValuesType):ChangeTodolistFilterACType => {
    return {type:"CHANGE-TODOLIST-FILTER",id:id, filter:filter}
}