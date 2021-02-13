import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default function MessageList(props){
    
    return(
        <div className="message-list">
            {props.x.map((el)=>{
                return(
                    <Message el={el} 
                            key={el.id}
                            
                    />
                )
            })}
        </div>
    )
    
}
