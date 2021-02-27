import React from 'react';
import './style.scss';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default props => {
    const messages = props.messages;

    return (
    <List className='message__wrap'>
        { messages.map((el, i) =>
            <ListItem key={ 'msgID' + i } className={ 'message ' + el.style }>
                <ListItemText primary={ el.text } secondary={ el.name } />
            </ListItem>
        ) }
    </List>
    );
}