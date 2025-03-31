import React, { useLayoutEffect, useState } from 'react'
import TaskInput from './section2_components/TaskInput'
import TaskList from './section2_components/TaskList'

export default function Section2() {
    const [list, setList] = useState(()=>{
        const reminders = localStorage.getItem("myReminders");
        return reminders ? JSON.parse(reminders) : [];
    });
    const [listFlag,setListFlag] = useState(false);

    useLayoutEffect(()=>{
        localStorage.setItem("myReminders", JSON.stringify(list));
    },[listFlag])
    return (
        <div className='section2_container'>
            <TaskInput list={list} setList={setList} setListFlag={setListFlag} listFlag={listFlag}/>
            <TaskList list={list} setList={setList} setListFlag={setListFlag} listFlag={listFlag}/>
        </div>
    )
}
