import React from 'react';
// import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

import './style.scss';

export default (props) => {
    return <div className="msg_input" >
        <input
            type="text"
            value={ props.clearInput }
            onChange={ props.change }
            onKeyUp={ props.keyup }
            placeholder="Напишите сообщение..."
        />
        <Button variant="outlined" color="primary" onClick={ props.click }>Отправить</Button>
    </div>;
};