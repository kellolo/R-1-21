import React from 'react';

import MessageList from '@containers/MessageList';
import Header from '@components/Header';
import ChatList from '@containers/ChatList';
import Footer from '@components/Footer';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chats: {
                0: { id: '0', title: 'Чат 1', messageList: [0] },
                1: { id: '1', title: 'Чат 2', messageList: [1] },
                2: { id: '2', title: 'Чат 3', messageList: [0] },
                3: { id: '3', title: 'Чат 4', messageList: [1] }
            }
        };
        this.addMsgToChat = this.addMsgToChat.bind(this);
        this.handleAddChat = this.handleAddChat.bind(this);
    }

    handleAddChat(name) {
        const { chats } = this.state;
        if (Object.values(chats).findIndex(el => el.title == name) !== -1) {
            return;
        }
        const id = Object.keys(chats).length + 1;
        this.setState({
            chats: {
                ...chats,
                [id]: {
                    id: id.toString(),
                    title: name,
                    messageList: [0]
                }
            },
        });
    }

    addMsgToChat(chatID, msgID) {
        const { chats } = this.state;
        this.setState({
            chats: {
                ...chats,
                [chatID]: {
                    ...chats[chatID],
                    messageList: [...chats[chatID]['messageList'], msgID]
                }
            }
        });
    }

    render() {
        const chatID = this.props.chatId ? this.props.chatId : '0';
        const chat = this.state.chats[chatID];

        return <StylesProvider>
            <Header chat={chat} user={''} />
            <main className='main'>
                <ChatList
                    chats={this.state.chats}
                    curent={chatID}
                    addChat={this.handleAddChat} />
                <MessageList chat={chat} addMsgToChat={this.addMsgToChat} />
            </main>
            <Footer />
        </StylesProvider>;
    }

}
