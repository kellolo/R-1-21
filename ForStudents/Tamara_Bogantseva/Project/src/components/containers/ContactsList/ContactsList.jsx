import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: 150
    },
});

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: false
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleListItemClick = (name, id) => {
        this.props.add(name, id);
    };

    render() {
        const { classes, theme, contacts } = this.props;
        const Contact = contacts.map((el) => (
            <ListItem button onClick={ () => this.handleListItemClick(el.name, el.id) } key={ el.id }>
                <ListItemAvatar>
                    <Avatar >
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ el.name } />
            </ListItem>
        ));
        const body = (
            <div className={ classes.paper }>
                <h2 id="simple-modal-title">Write to</h2>
                { Contact }
            </div>
        );

        return <div>
            <IconButton aria-label="add" color="primary" onClick={ this.handleOpen }>
                <AddCircleOutlineRoundedIcon />
            </IconButton>
            <Modal
                open={ this.state.open }
                onClose={ this.handleClose }
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                { body }
            </Modal>
        </div>;
    }
};

const mapState = ({ contactsReducer }) => ({
    contacts: contactsReducer.contacts,
});

const mapActions = dispatch => bindActionCreators({}, dispatch);

export default withStyles(styles, { withTheme: true })(withRouter(connect(mapState, mapActions)(ContactsList)));