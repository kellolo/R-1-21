import React,{Component} from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//const arr = [{name:'one',text:'Hey!'},{name:'one',text:'How are you?'}];
export default class MessageList extends Component {
    constructor(props){
        super(props);
        //this.state = {value:''}
        this.state={
            messages:[{name:'one',text:'Hey!'},{name:'one',text:'How are you?'}]
        }
    }
    sendMessage = () => {
        /*
        const old = [...this.state.messages];
        old.push({name:'bot',text:'fine'});
        this.setState(
            {
                messages:old
            }
        );*/
        //this.setState({value: this.state.value});
        console.log(this.inpt.value);
        this.setState({
            messages:[...this.state.messages,{
                name:'bot',text:this.inpt.value
            }]
        });
    }
    render(){
        const {messages} = this.state;
        const Messages = messages.map((el,i) => <Message key={i} 
                                        name={el.name}
                                        text={el.text}
                                        />);
    return <div>
        <input type="text" ref={ref => this.inpt = ref} />
            <button onClick={this.sendMessage}>Отправить</button>
            {Messages}
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