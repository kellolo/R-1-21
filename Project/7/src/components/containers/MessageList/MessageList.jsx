import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';

class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        this.props.send('Username', this.state.text);
        
        this.setState({
            text: ''
        });
    };

    componentDidUpdate() {
        // console.log('Отправлено');
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div className="message-list__wrapper">
            <div className="message-list__messages">
               { Messages } 
            </div>
            <div className="message-list__form">
                <input 
                    type="text"
                    value = { this.state.text }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                />
                <button onClick={ this.sendMessage }>add</button>
            </div>
        </div>;

    };
};

// mapState - это когда вы берете данные прям из хранилища
const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ send: sendMessage }, dispatch);

export default connect(mapState, mapActions)(MessageList);
