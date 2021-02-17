import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' }, 
                { name: 'one', text: 'How are you?' }
            ],
            yourMessage: ''
        };
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
            this.setState({
                messages: [...this.state.messages, 
                    { name: 'You', text: this.state.yourMessage },
                    // имитация раздумий
    //                { name: 'Bot-Sociopath', text: '#$#$#$#$#$#' }
                ],
                yourMessage: ''
            });
        }        
    }

/*    
    componentDidUpdate() {
        var regexp = /[а-яё]/i;
        var answer = regexp.test( this.state.yourMessage ) ? 'Parle français?' : 'Ай донт спик инглиш';
        // после апдейта проверим, кто написал последним, если бот, то удалим раздумия и ответим
        const last = this.state.messages[ this.state.messages.length-1 ];
        if (last.name == 'Bot-Sociopath' && last.text == '#$#$#$#$#$#') { 
            this.state.messages.pop();
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

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);

        return <div>
            <input
                 type="text"
                 value = { this.state.yourMessage }
                 onChange = { this.changeHandler }
                 onKeyUp = { this.changeHandler }/>
            <button onClick={ this.sendMessage }>add</button>
            { Messages }
        </div>;

    }
};

//stateLess
// const arr = [{ name: 'one', text: 'Hey!' }, { name: 'one', text: 'How are you?' }];

// export default () => {
//     const Messages = arr.map((el, i) => <Message 
//                                             key={ 'msg_' + i } 
//                                             name={ el.name } 
//                                             text={ el.text }
//                                         />);

//     return <div>
//         { Messages }
//     </div>;
// };