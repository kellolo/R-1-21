import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Message from '@components/Message';

import './style.scss';

export default class MessageList extends Component {
    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) =>
            <Message
                key={ i }
                name={ el.name }
                text={ el.text }
                date={ el.date }
            />
        );
        return ( 
            <div ref={ this.props.scroll } className="msg-list">
                { Messages }
            </div>
        );
    };
};