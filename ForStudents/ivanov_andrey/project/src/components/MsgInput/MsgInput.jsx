import React from 'react';
import './style.scss';

export default () => {
    return <div className="message-input">
             <input type="text" className="message-input__text"/>
             <button className="message-input__btn">Отправить сообщение (input)</button>
           </div>;
};


