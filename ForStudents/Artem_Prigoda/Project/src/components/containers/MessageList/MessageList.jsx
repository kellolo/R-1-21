import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import Message from '@components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessages } from '@actions/messages';
import redux from 'redux';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // messages: [
            //     { name: 'owner', text: 'Hey!' },
            //     { name: 'owner', text: 'How are you?' }
            // ],
            value: ''
        };
        this.owner = 'owner';

    }
    handleChange = event => {
        if (event.keyCode !== 13) {
            this.setState({ value: event.target.value });
        } else {
            this.sendMessage();
        }
    };
    sendMessage = () => {
        this.setState({
            value: '',
            messages: [...this.state.messages, {
                name: this.owner, text: this.state.value
            }],

        });
    };
    componentDidUpdate = () => {
        if (this.props.messages[this.props.messages.length - 1].name !== 'bot') {
            // this.setState({
            //     messages: [...this.state.messages, {
            //         name: 'bot', text: 'welcome'
            //     }]
            // });
        }
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return <div className="layout">
            <div className="message-list">
                {Messages}
            </div>
            <div className="message-list--input">
                {/* <TextField
                            name="input"
                            fullWidth={true}
                            hintText="Введите сообщение"
                            style={{ fontSize: '22px' }}
                            onChange={this.handleChange}
                            value={this.state.value}
                            onKeyUp={this.handleChange}
                        /> */}
                <TextField
                    name="input"
                    id="standard-basic"
                    fullWidth={true}
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.value}
                    onKeyUp={this.handleChange}
                />
                {/* <button onClick={this.sendMessage}>send</button> */}
                <Fab color="primary" aria-label="add" onClick={this.sendMessage} className="message-list--button" >
                    <SendIcon />
                </Fab>
            </div>
        </div>;

    }
};

const mapStateToProps = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});
const mapActions = dispatch => bindActionCreators({ loadMessages }, dispatch);
export default connect(mapStateToProps, mapActions)(MessageList);