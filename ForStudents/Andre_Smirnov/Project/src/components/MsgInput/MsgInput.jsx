import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SendIcon from '@material-ui/icons/Send';

import './style.scss';



const useStyles = (theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

class MsgInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputMsg: '', };

  }

  handleChange = (e) => {
    this.setState({ inputMsg: e.target.value });
  }

  handleSubmit = (e) => {

    //alert('A name was submitted: ' + this.state.inputMsg);
    this.props.addMsg(this.state.inputMsg);
    this.setState({ inputMsg: '' });
    e.preventDefault();

  }

  render() {
    const { classes } = this.props;

    return (
      <Paper component="form" className={classes.root} onSubmit={this.handleSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Написать сообщение..."
          inputProps={{ 'aria-label': 'msginputtxt' }}
          value={this.state.inputMsg} onChange={this.handleChange}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="send">
          <SendIcon />
        </IconButton>
      </Paper>
    );
  }
};

export default withStyles(useStyles)(MsgInput);


