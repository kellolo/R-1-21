 
    import React, { Component } from 'react';
    import './style.scss';
    import Modal from '@components/Modal';
    import Dialog from '@components/Dialog';
    import Divider from '@material-ui/core/Divider';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemAvatar from '@material-ui/core/ListItemAvatar';
    import ListItemText from '@material-ui/core/ListItemText';
    import Avatar from '@material-ui/core/Avatar';


    export default class MessageList extends Component {
        constructor (props) {
            super(props);
            this.state = {
            };
        }
        render() {
            return <div className="contactslist">
                    <List>
                        {['User1', 'User2', 'User3', 'User4'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemAvatar><Avatar></Avatar></ListItemAvatar>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                <Dialog />
            </div>;
        }
    };
    