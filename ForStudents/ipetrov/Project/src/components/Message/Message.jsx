import React from 'react';
// import ReactDom from 'react-dom';
import './style.scss';


export default props => {
    const { name, text } = props;

    return  <div className="message"
                 style={ 
                    {alignSelf:  name   === 'You' ? 
                        'flex-end' : 'flex-start', 
                    textAlign: name === 'You' ?
                        'right' : 'left'}
                         }>
                <p><b>{ name }</b></p>
                <p>{ text }</p>
            </div>;
}