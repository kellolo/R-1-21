import React from 'react';
import './style.scss';


export default props => {
    const { name, text, styleName } = props;

    const msgStyle = `msg__text ${styleName}`;

    return  <div className={ msgStyle }>
                <p><b>{ name }</b></p>
                <hr/>
                <p>{ text }</p>
            </div>;
}