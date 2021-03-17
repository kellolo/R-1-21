import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './style.scss';
let ContactLst = <ul>
                    <li className="contact-list">Иванов</li>
                    <li className="contact-list">Петров</li>
                    <li className="contact-list">Сидоров</li>
                    <li className="contact-list">Воробьёв</li>
                    <li className="contact-list">Орлов</li>
                </ul>;
export default class ContactList extends Component {
    render(){
        return(<div>{ContactLst}</div>);
        
    }
}