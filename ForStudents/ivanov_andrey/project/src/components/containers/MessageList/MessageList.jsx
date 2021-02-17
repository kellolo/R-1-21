import React, { Component } from 'react';
import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Андрей', text: 'Привет! Это очень длинный текс для проверки верстки в компоненте!!!!11' }, 
                { name: 'Андрей', text: 'Как дела?' }
            ],
        };
    }

    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Аноним', text: 'Норм'
            }]
        });
    }
    componentWillMount() {
        console.log('MessageList componentWillMount');
    }
 
    componentDidMount() {
        console.log('MessageList componentDidMount');
        
    }
     componentDidUpdate() {
        console.log('MessageList componentDidUpdate');
        let msgArr = [...this.state.messages];
        let msgArrLength = msgArr.length;

        if (msgArr[msgArrLength-1].name != 'Бот'){

            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {
                        name: 'Бот', text: 'Ответ от бота через 1 секунду'
                    }]
                }); 
            }, 1000);
        }
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, index) => 
            <Message 
                key={ 'msg_' + index } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div className="message-list">
                 { Messages }
                 <button className="message-list__btn" onClick={ this.sendMessage }>Отправить сообщение</button>
               </div>;

    }
};