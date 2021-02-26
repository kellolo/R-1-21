
import React, { Component, Fragment } from 'react';
import './style.scss';
import Modal from '@components/Modal';
import Contact from '@components/Contact'
import { Link } from 'react-router-dom';

export default class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeChats: [{name:'Василий Петрович шиномонтаж', id: '1'}, 
                            {name:'Эдуард Васильевич прачечная', id: '2'}, 
                            {name:'Максим Евгеньевич парикмахерская', id: '3'}],
            inactiveChats: [{name:'Вась Васич', id: '4'}, 
                            {name:'Оль Олич', id: '5'}, 
                            {name:'Дим Димыч', id: '6'}, 
                            {name:'Халк Халкыч', id: '7'}]
        };
    }

    handleContact = val => {
        // добавим контакт в список чатов
        this.setState({ activeChats: [
            ...this.state.activeChats,
            { name: val, id: this.state.activeChats.length + 1 }
        ]});

        // удалим контакт из списка контактов не в чате. Если не остается контактов, то selectedValue нечего назначить и все пропало
        const inactiveProcessing = this.state.inactiveChats;
        const inactiveChats = inactiveProcessing.filter((user, i) => user.name !== val);
        this.setState({ inactiveChats: [
            ...inactiveChats
        ]});
    }

    render() {

        const { activeChats } = this.state;
        const Contacts = activeChats.map((el, i) => 
            <Link to = { '/chat/${el.id}' }>
                <Contact 
                    key={ 'contact_' + i } 
                    name={ el.name }
                />
            </Link>);

        return <div className="contactslist">
            <div>{ Contacts }</div>
            <Modal  add={ this.handleContact } 
                    inactiveChats={ this.state.inactiveChats }
            />
        </div>;
    }
};
    