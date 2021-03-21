import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    testClass: {
        fontSize: '10em',
    },
    width: {
        backgroundColor: 'red',
    },
    btn_contact: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        props.addChat(value);
        onClose(value);
    };
    return (
        <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={ open }>
            <DialogTitle id="simple-dialog-title">Выберете собеседника</DialogTitle>
            <List>
                {props.emails.map((email) => (
                    <ListItem button onClick={ () => handleListItemClick(email) } key={ email }>
                        <ListItemAvatar>
                            <Avatar className={ classes.avatar }>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ email } />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(props.emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className="modal-main">
            <Button className={ classes.btn_contact } variant="outlined" color="primary" onClick={ handleClickOpen }>
                Открыть список контактов
            </Button>
            <SimpleDialog selectedValue={ selectedValue } open={ open } onClose={ handleClose } addChat={ props.add } emails={ props.emails }/>
        </div>
    );
};