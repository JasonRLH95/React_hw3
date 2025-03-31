import React from 'react'
import Task from './Task'

export default function TaskList({ list, setList, setListFlag, listFlag }) {
    const deployList =()=>{
        if(list.length === 0){
            return <h2>Empty...</h2>
        }
        return list.map((obj, inx)=>{
            return <Task key={`task_${inx+1}`} task={obj}/>
        })
    }
    const clearAll=()=>{
        setList([]);
        setListFlag(!listFlag);
    }
  return (
    <div className='taskList_container'>
        {deployList()}
        {list.length !== 0 && <button onClick={()=>{clearAll()}}>Clear All</button>}
    </div>
  )
}
