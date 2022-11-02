import React, {useCallback} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from './state/todolists-reducer';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, store} from './state/store';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";


export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = (props: any) => {
    return<AppWithRedux/>



}