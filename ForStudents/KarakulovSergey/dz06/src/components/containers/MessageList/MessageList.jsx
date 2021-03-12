import React,{Component} from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadMessages, sendMessage} from '@actions/messages'
//const arr = [{name:'one',text:'Hey!'},{name:'one',text:'How are you?'}];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function mes(s){
    var i=getRandomInt(1,7);
    var str;
    switch(i){
        case 1:
            str="Привет";
            break;
        case 2:
            str="Я просто робот";
            break;
        case 3:
            str="как дела?";
            break;
        case 4:
            str="Отвечаю наобум";
            break;
        case 5:
            str="Уже зима?";
            break;   
        case 6:
            str="Знал я одного "+s;
            break; 
        default:
            str='Не приставай ко мне я робот'
    }
    return str;
}
let n;
class MessageList extends Component {
    constructor(props){
        super(props);
        this.state={
            value : ''
        }
    }

    componentDidUpdate() {
        /*
        if(this.state.messages.length % 2 === 1){
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {name:'bot',text:mes(n)} ] }), 1000);
   
        }
        */
    }
    sendMessage = () => {
        this.props.send('Username', this.state.value);
        this.setState({
            value : '',
            /*messages:[...this.state.messages,{
                name:'user',text:this.state.value
            }]*/
        });
        //n=this.state.value;
    }
    handleChange = (event) => {
        if(event.keyCode != 13){
            this.setState({ value: event.target.value });
        } else {
            this.sendMessage();
        }
        
    }
    render(){
        const {messages} = this.props;
        const Messages = messages.map((el,i) => <Message key={i} 
                                        name={el.name}
                                        text={el.text}
                                        />);
    return <div id="msg">
            <div id="msg-list-msg">
                {Messages}
            </div>
            <div id="send-msg">
                <input id="messagelist-input" type="text" value={this.state.value} onChange={this.handleChange} />
                <button id="messagelist-button" onClick={this.sendMessage}>Отправить</button>
            </div>
        </div>;
    }
}
const mapState = ({ messagesReducer }) => ({
    messages:messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load:loadMessages, send: sendMessage }, dispatch);

export default connect(mapState,mapActions)(MessageList);
/*
const arr = [{name:'one',text:'Hey!'},{name:'one',text:'How are you?'}];

export default () => {
    const Messages = arr.map((el,i) => <Message key={i} 
                                        name={el.name}
                                        text={el.text}
                                        />);
    return <div>
            {Messages}
        </div>;
}
*/