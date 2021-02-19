import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default function MessageList(props){
    
    return(
        <div className="container-message-page">
            <div  className="message-header">
                <button onClick={()=>{props.z.back()}} className="message-header-btn">&#9754;</button>
                <div className="message-header-avatar"></div>
                <span className="message-header-name">{props.x[0].name}</span>
            </div>
            <div className="message-list">
        
                {props.x.map((el)=>{
                    return(
                    <Message el={el} 
                            key={el.id}
                            
                        />
                    )
                })}
            </div>
        </div>
    )
    
}
