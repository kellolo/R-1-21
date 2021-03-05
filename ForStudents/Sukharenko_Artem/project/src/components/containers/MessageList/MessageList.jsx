import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './style.scss';
import { loadMessages } from '@actions/messages';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';


class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    sendMessage = (value) => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Me', text: value, styleName: 'msg__user'
            }]
        });
    }

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i }
                name={ el.name }
                avatar={el.avatar}
                text={ el.text }
                styleName={el.styleName}
            />);
        
        return (<Grid container direction="column">
                <Grid item>
                    <MsgInput sendMessage={ this.sendMessage }/>
                </Grid>
                <Grid item style={{overflow: "visible"}}>
                    <List className="msg__list">
                        { Messages }
                    </List>
                </Grid>
            </Grid>);
    }
};

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);
