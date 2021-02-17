import React from 'react';
// import ReactDom from 'react-dom';
import './style.scss';

export default (props) => {
    return <div className="layout">
        <div className="msg-list">
            <input value={props.clearInput} onChange={props.change} onKeyUp={props.keyup} type="text" placeholder="Напишите сообщение..." />
            <button onClick={props.click}>Отправить</button>
        </div>
    </div>;
};