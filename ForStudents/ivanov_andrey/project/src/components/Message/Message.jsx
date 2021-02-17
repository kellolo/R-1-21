import React, {Component} from 'react';
import './style.scss';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
        this.text = props.text;
    }
    
    render(){
        return  <div className="message">
                    <p className="message__username"><b>{ this.name }</b></p>
                    <p className="message__text">{ this.text }</p>
                </div>; 
    }
}









/* export default props => {
    const { name, text } = props;

    return  <div className="message">
                <p className="message__username"><b>{ name }</b></p>
                <p className="message__text">{ text }</p>
            </div>;
} */