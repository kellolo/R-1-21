import React from 'react';
import ReactDom from 'react-dom';

import './style.scss';
function txt(str){
    if(str==""){
        return "Чат не выбран";
    }else{
        return "Чат с "+str;
    }
}

export default class Header extends React.Component {
    render(){
        let text = txt(this.props.name);
        return(
            <div className="chat-header"><h1>{text}</h1></div>
        );
    }
}