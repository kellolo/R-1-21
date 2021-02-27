import React from 'react';
import ReactDom from 'react-dom';

import './style.scss';

export default class Header extends React.Component{
    render(){
        return(
            <div className="chat-header"><h1>Заголовок</h1></div>
        );
    }
}