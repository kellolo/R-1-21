import React,{Component} from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
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
export default class MessageList extends Component {
    constructor(props){
        super(props);
        this.state={
            messages:[{name:'bot',text:'Привет!'},{name:'bot',text:'Ты кто?'}],
            value : ''
        }
    }

    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1){
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {name:'bot',text:mes(n)} ] }), 1000);
   
        }
    }
    sendMessage = () => {
        this.setState({
            value : '',
            messages:[...this.state.messages,{
                name:'user',text:this.state.value
            }]
        });
        n=this.state.value;
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    render(){
        const {messages} = this.state;
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