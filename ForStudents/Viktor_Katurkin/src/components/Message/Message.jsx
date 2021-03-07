import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default function Message(props){
    
    return(
        <div className="message-container">
            <div className="message-box">
                <span className="message">
                    {props.el.text}
                </span>
            </div>  
        </div>
        
    )
}