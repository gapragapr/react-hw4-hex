import React from 'react'
import { useState } from 'react'
import './main.css'

export default function Main(){
    let [color, setColor] = useState('');
    let [value, setValue] = useState('');
    let [err, setError] = useState('')

    function hexToRgb(hex){
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let result = null;
        try{
            const r = parseInt(regex[1], 16);
            const g = parseInt(regex[2], 16);
            const b = parseInt(regex[3], 16);
            result = `rgb(${r}, ${g}, ${b})`
            return result
        } catch(e){
            result = 'Ошибка'
        }
        return result
    }
    function handleChange(event){
        setValue(value = event.target.value)
        
        if (hexToRgb(value) !== 'Ошибка'){
            setColor(color = hexToRgb(value))
            setError(err = '')
        } else {
            setError(err = 'Ошибка')
        }
        
    }


    return(
        <div className="hex-to-rgb_app" style={{backgroundColor: color}}>
            <form action="">
                <input type="text" onChange={handleChange}/>
            </form>
            <div className="output">
                <p>{err === '' ? color : err}</p>
            </div>
        </div>
    )
}