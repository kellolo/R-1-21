import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';


export default props => {
    const { msgID, name, text, avatar, styleName } = props;

    const msgStyle = `msg__text ${styleName}`;

    return (<ListItem key={ msgID }>
                <div className={ msgStyle }>
                    <Avatar alt={ name } src={ avatar } />
                    <ListItemText primary={ text } />
                </div>
            </ListItem>
        );
}