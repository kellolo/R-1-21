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
            />);
        return <div className="layout">
            <div className="msg-list">
                {Messages}
            </div>
        </div>;
    };
};