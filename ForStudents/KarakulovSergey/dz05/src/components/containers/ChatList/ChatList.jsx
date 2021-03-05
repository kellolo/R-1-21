import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Modal from '@containers/modal';
import {Link} from 'react-router-dom';
import './style.scss';

/*let ChatLst = <ul>
                    <li className="chatlist-li">чат 1</li>
                    <li className="chatlist-li">чат 2</li>
                    <li className="chatlist-li">чат 3</li>
                    <li className="chatlist-li">чат 4</li>
                    <li className="chatlist-li">чат 5</li>
                </ul>;*/
export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChats:[
                {name:'User 1', id:'1'},
                {name:'User 2', id:'2'},
                {name:'User 3', id:'3'},
                {name:'User 4', id:'4'},
                {name:'User 5', id:'5'}
            ]
        }
    }
    addChat= name => {
        this.setState({ activeChats:[...this.state.activeChats,{name}]});
    }
    render() {
        const {activeChats} =this.state;
        const chats = activeChats.map((el,i) => <li key={i} className="chatlist-li"><Link to = {`/chat/${el.id}`} >{ el.name }</Link></li>);
        return <div className="chatlist">
                <ul>
                    {chats}
                </ul>
                <Modal add = {this.addChat} />
                <div>
                    <Link to = '/not-home'>Not Home</Link>
                </div>
            </div>
            
    }
}