import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import {  StylesProvider, makeStyles } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';

// props === {
//     name: 'some',
//     text: 'lorem'
// }

export default props => {
    const { name, text } = props;

    return (
        <React.Fragment>
            <ListItem >
                
                <ListItemText primary={text} secondary={name}  />
            </ListItem>
        </React.Fragment>
    );
    
}