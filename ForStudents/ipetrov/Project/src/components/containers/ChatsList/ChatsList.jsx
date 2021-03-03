
import React, { Component } from 'react';
import './style.scss';
import ContactsList from '@containers/ContactsList';
import { connect } from 'react-redux';


class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
/*             activeChats: [
               
                    "0": { name:'Василий Петрович шиномонтаж', messagelist: ['0', '1', '2', '3'] },
                    "1": { name:'Эдуард Васильевич прачечная', messagelist: ['0', '1', '2', '3'] },
                    "2": { name:'Максим Евгеньевич парикмахерская', messagelist: ['0', '1', '2', '3'] },

                {name:'Василий Петрович шиномонтаж', id: '1'}, 
                {name:'Эдуард Васильевич прачечная', id: '2'}, 
                {name:'Максим Евгеньевич парикмахерская', id: '3'}],
*/
            }
    }

    addContact = val => {
        // добавим контакт в список чатов
        this.setState({ activeChats: [
            ...this.state.activeChats,
            { name: val, id: this.state.activeChats.length }
        ]});
    }

    render() {
        return <div className="chatslist">
            <ContactsList addContact={ this.addContact } activeChats={ this.props.activeChats } />
        </div>;
    }
};

const mapState = ({ chatsReducer }) => ({ 
    activeChats: chatsReducer.activeChats
})

export default connect(mapState, null)(ChatsList);