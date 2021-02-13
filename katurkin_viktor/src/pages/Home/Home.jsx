import React, { useEffect } from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import MsgInput from '@components/MsgInput';
import Context from '@context/context.js'

import './style.scss';

export default function() {

    let masSms=[
                {name:"John", text:"Hello World!",id:1}
            ];
    const [sms, setSms]=React.useState(masSms);
    
    function onCreateXXX(title,name="Doe"){
        console.log('ggggg')
        setSms(sms.concat([{
            text:title,
            id:Date.now(),
            name
        }]));
        
        console.log(sms);
    }
    
    return (
        <Context.Provider value={{onCreateXXX}}>
    <div className="div">
        
        <MessageList x={sms} />
        <MsgInput  />
        
    </div>
    </Context.Provider>)
}
