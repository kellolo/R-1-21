import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import {  StylesProvider, makeStyles } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

export default props => {
    const { userName, lastMessage } = props;
    return (
        <React.Fragment>
            <ListItem button >
                <ListItemIcon>
                    <Badge badgeContent={2} color="secondary">
                        <Avatar>U</Avatar>
                    </Badge>    
                </ListItemIcon>
                <ListItemText primary={userName} />
            </ListItem>
        </React.Fragment>
    );    
    // return  <div>
    //             <p><b>{ userName }</b></p>
    //             {/* <p>{ lastMessage.text }</p> */}
    //         </div>;
    //<ListItem button component={Link} to="/">
}

