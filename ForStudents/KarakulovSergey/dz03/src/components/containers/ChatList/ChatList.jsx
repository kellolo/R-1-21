import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Modal from '@containers/modal';
import './style.scss';

let ChatLst = <ul>
                    <li className="chatlist-li">чат 1</li>
                    <li className="chatlist-li">чат 2</li>
                    <li className="chatlist-li">чат 3</li>
                    <li className="chatlist-li">чат 4</li>
                    <li className="chatlist-li">чат 5</li>
                </ul>;
export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className="chatlist">
                {ChatLst}
                <Modal />
            </div>
    }
}