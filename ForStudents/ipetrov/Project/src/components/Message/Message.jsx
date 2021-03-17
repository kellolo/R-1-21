import React from 'react';
// import ReactDom from 'react-dom';
import './style.scss';


export default props => {
    const { name, text, date } = props;

    return  <div className="message"
                 style={ 
                    {alignSelf:  name   === 'You' ? 
                        'flex-end' : 'flex-start', 
                    textAlign: name === 'You' ?
                        'right' : 'left'}
                         }>
                <p className="messageName"><b>{ name }</b></p>
                <p className="messageText">{ text }</p>
                <p className="messageDate">{ date }</p>
            </div>;
}