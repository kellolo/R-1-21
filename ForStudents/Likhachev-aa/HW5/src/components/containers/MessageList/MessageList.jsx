import React, { Component } from 'react';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessages } from '@actions/messages';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: false,
        };
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'user', text: text, style: 'message__user'
            }],
            userAnswer: true,
        });
    };

    render() {
        const Messages = this.props.messages.map((el, i) =>
            <Message
                msgID={'msg_' + i}
                name={el.name}
                text={el.text}
                styleMsg={el.style}
            />
        );

        return <div className="message-list">
            <List className="message-list__msg">
                {Messages}
            </List>
            <div className="message-list__input">
                <MsgInput sendMessage={this.sendMessage} />
            </div>
        </div>;
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.userAnswer) {
                this.setState({
                    messages: [...this.state.messages, { name: 'bot', text: 'Hello', style: 'message__bot' }],
                    userAnswer: false,
                }
                );
            }
        }, 2000);
    }
};

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);