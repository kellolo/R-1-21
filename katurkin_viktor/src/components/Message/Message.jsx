import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default function Message(props){
    
    return(
        <div>
        <span className="message">
            {props.el.text}
        </span>
        </div>  
        
        
    )
}