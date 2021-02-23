import React, { Component } from 'react';
import './style.scss';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default class ListContact extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() { 
        return <div className="listcontact">
            <List dense>
                {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} button>
                        <ListItemAvatar>
                        <Avatar
                            alt={`Avatar n°${value + 1}`}
                            // src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`User ${value + 1}`} />
                    </ListItem>
                    );
                })}
            </List>
        </div>;
    }
};

