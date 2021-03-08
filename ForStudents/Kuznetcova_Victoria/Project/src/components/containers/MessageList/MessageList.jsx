import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

import SendIcon from '@material-ui/icons/Send';


import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';

import { loadMessages } from '@actions/messages' ;


class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        this.setState ({
            text: '',
            messages: [...this.state.messages, 
                {
                   name: 'User',
                   text: this.state.text
                }]
            });
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el,i) => 
        <Message 
                key={ i } 
                name={ el.name }
                text= { el.text }
        />);
    return <div className="message-list">
        <div className="message-list_wrp">
            { Messages }
        </div>
        <div className="message-list_input">
                <input 
                    type="text" 
                    value = { this.state.text } 
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                    className="input-text"
                />
                {/* <SendIcon /> */}
            <button onClick={ this.sendMessage } className="input-btn"><SendIcon /></button>
        </div>
    </div>;

    }
};


const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages }, dispatch);


export default connect(mapState, null)(MessageList);