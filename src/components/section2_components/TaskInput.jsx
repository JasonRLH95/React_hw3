import React, { useRef, useState } from 'react'

export default function TaskInput({ list, setList, setListFlag, listFlag }) {
    const [textState,setText] = useState("");
    const [dateState,setDate] = useState("");
    const [today,setToday] = useState(new Date().toISOString().split("T")[0]);

    const textRef = useRef();
    const dateRef = useRef();


    const validateReminder=()=>{
        if(textState === "" || dateState === ""){
            return alert("must fill all fields first");
        }
        else{
            const task ={
                text: textState,
                date: dateState
            };
            setList([...list, task]);
            textRef.current.value = "";
            dateRef.current.value = "";
            setListFlag(!listFlag);
        }
    }

    return (
        <div className='taskInput_container'>
            <h1>Remider Pro</h1>
            <div className="taskInput_addTask">
                <input ref={textRef} className='addTask_inputText' type="text" placeholder='i have to...' onChange={(e)=>{setText(e.target.value)}}/>
                <input ref={dateRef} className='addTask_inputDate' type="date" min={today} onChange={(e)=>{setDate(e.target.value)}}/>
                <button onClick={()=>{validateReminder()}}>Add Reminder</button>
            </div>
        </div>
    )
}
