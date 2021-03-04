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
            yourMessage: ''
        };
        this.chatContainer = React.createRef();
    }
    
    changeHandler = (event) => {
        if (event.keyCode !== 13) {
            this.setState({ yourMessage: event.target.value });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        if (this.state.yourMessage !== '') {
//            this.textInput.current.disabled = true;
            this.props.send('You', this.state.yourMessage);
            this.setState({
                yourMessage: ''
            },
                () => this.scrollToMyRef()
                
            );
        }        
    }

/*    
    componentDidUpdate() {
        var regexp = /[а-яё]/i;
        var answer = regexp.test( this.state.yourMessage ) ? 'Parle français?' : 'Ай донт спик инглиш';
        // после апдейта проверим, кто написал последним, если бот, то удалим раздумия и ответим
        const last = this.state.messages[this.state.messages.length - 1];
        if (last.name == 'Bot-Sociopath' && last.text == '#$#$#$#$#$#') { 
            this.state.messages.pop();
            this.textInput.current.disabled = false;
            setTimeout(() =>  
            this.setState({
                messages: [...this.state.messages, 
                    { name: 'Bot-Sociopath', text: answer }
                ] 
            })
            , 1000);          
        }
    }
*/

    scrollToMyRef = () => {
        const scroll =
        this.chatContainer.current.scrollHeight -
        this.chatContainer.current.clientHeight;
        this.chatContainer.current.scrollTo(0, scroll);
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
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
                    <div className="messages" ref={this.chatContainer}>{ Messages }</div>
                </div>;

    }
};

const mapState = ({ messagesReducer }) => ({ 
    messages: messagesReducer.messages
})

const mapActions = dispatch => bindActionCreators({ send: sendMessage }, dispatch);

export default connect(mapState, mapActions)(MessageList);