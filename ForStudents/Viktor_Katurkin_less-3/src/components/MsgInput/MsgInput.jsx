import React,{useContext,useState} from 'react'
import Context from '@context/context.js'


import './style.scss';

export default function MsgInput(props){
    const {onCreateXXX}=useContext(Context)
    const[valueXXX, setValueXXX]=useState('');
    
    function stopSubmit(event){
        event.preventDefault(); 
        
        if(valueXXX.trim()){ // Метод trim уберает все пробелы
         
            onCreateXXX(valueXXX)
            setValueXXX('')
         }
    }
    
    
    
    return(
        <form onSubmit={stopSubmit} className="msg-form">
            <input type="text" className="message-input" value={valueXXX} onChange={event=>setValueXXX(event.target.value)}/>
            <br/>
            <button type="submit" >Send sms</button>
        </form>
    )
}

// Это наш AddTodo из видео