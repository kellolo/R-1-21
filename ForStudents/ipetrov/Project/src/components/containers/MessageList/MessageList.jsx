import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './style.scss';
import Message from '@components/Message';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';

class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            yourMessage: ''
        };
        this.chatContainer = React.createRef();
    };

    async componentDidMount() {
        await this.props.load(this.props.userId, this.props.chatId);
    };
    
    changeHandler = (event) => {
        if (event.keyCode !== 13) {
            this.setState({ yourMessage: event.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        if (this.state.yourMessage !== '') {
//            this.textInput.current.disabled = true;
            this.props.send('You', this.state.yourMessage, this.props.chatId, this.props.userId);
            this.setState({
                yourMessage: ''
            },
                () => this.scrollToMyRef()
            );
        }        
    };

    scrollToMyRef = () => {
        const scroll =
        this.chatContainer.current.scrollHeight -
        this.chatContainer.current.clientHeight;
        this.chatContainer.current.scrollTo(0, scroll);
    };

    render() {
        const messages = this.props.messages;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
                date={ el.date }
            />);
        
        return <div className="messagelist">
                    <div className="controls">
                        <input
                            type="text"
                            value = { this.state.yourMessage }
                            onChange = { this.changeHandler }
                            onKeyUp = { this.changeHandler }
                            className="messagebox"
                            />
                        <button className="sendbutton" onClick={ this.sendMessage }>Send</button>
                    </div>
                    <div className="messages" ref={ this.chatContainer }>{ Messages }</div>
                </div>;
        
    }
};

const mapState = ({ messagesReducer }) => ({ 
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages, send: sendMessage }, dispatch);

export default connect(mapState, mapActions)(MessageList);