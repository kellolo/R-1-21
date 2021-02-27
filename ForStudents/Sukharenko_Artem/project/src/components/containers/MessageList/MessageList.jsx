import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Me', text: 'Hey!', avatar: null, styleName: 'msg__user'}, 
                { name: 'two', text: 'How are you?', avatar: null, styleName: 'msg__companion' }
            ],
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
        const { messages } = this.state;
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
