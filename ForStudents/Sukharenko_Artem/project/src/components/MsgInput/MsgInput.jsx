import React, { Component } from 'react';

import './style.scss';

// export default () => {
//     return <div className="msg__container_input">
//         <div>
//             <input type="text"/>
//         </div>
//         <div>
//             <button onClick={ this.sendMessage }>add</button>
//         </div>
//     </div>;
// };


export default class MsgInput extends Component {
    constructor (props) {
        super(props);
    }

    sendMessage = (event) => {
        let userMsgInput = null;
        if(event.type === 'keyup' && event.key === 'Enter') {
            userMsgInput = event.target;
        } else if (event.type === 'click') {
            userMsgInput = document.querySelector('#user-msg');
        } else {
            return;
        }
        const msg = userMsgInput.value.trim();
        if (msg === '') return;
        this.props.sendMessage(msg);
        userMsgInput.value = '';
    }

    render() {
        return <div className="msg__container_input">
        <div>
            <input id='user-msg' onKeyUp={ this.sendMessage } type="text"/>
        </div>
        <div>
            <button onClick={ this.sendMessage } >send</button>
        </div>
    </div>;
    }
};
