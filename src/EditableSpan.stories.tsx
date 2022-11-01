import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'EditableSpan Component',
    component: EditableSpan
}
const changeCallback = action('Button add was pressed inside the from')

export const EditableSpanBaseExample = (props: any) => {
    return <EditableSpan value={"Start value"} onChange={changeCallback}/>

}