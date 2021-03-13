import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';
import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
//stateFull
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                // { name: 'one', text: 'Hey!' }, 
                // { name: 'one', text: 'How are you?' }
            ],


        };
    }

    addMessage = (msg) => {
        this.props.send('Username', msg);
        
        // this.setState({
        //     messages: [...this.state.messages, {
        //         name: 'User1', text: msg
        //     }]
        // });
        const LastMsg = document.getElementById('msgList').lastElementChild;
        LastMsg.scrollIntoView({ block: "end", behavior: "smooth" });

    }


    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return (
            <React.Fragment>
                <Paper className="message__wrapper">

                    <List className="message__items" id='msgList'>
                        {Messages}
                    </List>
                    <MsgInput addMsg={this.addMessage} />
                </Paper>
            </React.Fragment>
        );


    }
};

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ send: sendMessage }, dispatch);

export default connect(mapState, mapActions)(MessageList);

