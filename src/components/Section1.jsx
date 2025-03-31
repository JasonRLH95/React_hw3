import React, { useLayoutEffect, useRef, useState } from 'react'
var isColor;
import("is-color").then((module)=>{isColor = module.default; return isColor});

export default function Section1() {
    const [color,setColor] = useState(()=>{
        const currentColor = localStorage.getItem("myColor");
        return currentColor ? JSON.parse(currentColor) : "";
    });
    const [colorFlag,setColorFlag] = useState(false);
    const [msgFlag,setMsgFlag] = useState(false);
    const [msgText,setMsgText] = useState(false);
    
    
    const btnRef = useRef();
    const inputRef = useRef();

    useLayoutEffect(()=>{
        localStorage.setItem("myColor", JSON.stringify(color));
        if(color !== ""){
            btnRef.current.style.backgroundColor = color;
        }
        
    },[colorFlag])

    
    const checkColorValid =(_color)=>{
        if(_color === "" || !isColor(_color)){
            if(_color === ""){
                msgApi("Please type any color first");
            }
            else if(!isColor(_color)){
                msgApi("Unvalid color, pick another!");
            }
        }
        else {
            btnRef.current.style.backgroundColor = _color;
            inputRef.current.value = "";
            setColorFlag(!colorFlag);
            return;
        }
    }

    const msgApi=(_msg)=>{
        if(msgFlag){ // prevent from multiple calls before call ending;
            return;
        }
        setMsgText(_msg);
        setMsgFlag(true);
        setTimeout(() => {
            setMsgFlag(false);
        }, 4000);
    }

    return (
        <div className='section1_container'>
            <h1>Color Picker</h1>
            <div className="colorInput_container">
                <input ref={inputRef} type="text" placeholder='Enter your favorite color' onChange={(e)=>{setColor(e.target.value)}}/>
                {msgFlag && <p>{msgText}</p>}
            </div>
            <button ref={btnRef} onClick={()=>{checkColorValid(inputRef.current.value)}}>Save</button>
        </div>
    )
}
