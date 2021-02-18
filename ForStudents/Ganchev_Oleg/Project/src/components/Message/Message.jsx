import React from 'react';
import './style.scss';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default props => {
    let { msgID, name, text, styleMsg } = props;
    return <ListItem key={ msgID } className={ 'message ' + styleMsg }>
        <ListItemText primary={ text } secondary={ name } />
    </ListItem>;
}