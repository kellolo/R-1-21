import React, {Component} from 'react';
import './style.scss';
import { TextField, withStyles } from '@material-ui/core';


const styles ={
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    padding: '8px',
  },
};

class MsgInput extends Component {
  constructor(props){
      super(props);
      this.inputFieldRef = React.createRef();
      this.state = {
        name: 'Я',
        text: ''
      }
  }
    
  onSubmit = evt => {
    evt.preventDefault();

    const { sendMessage } = this.props;
    sendMessage(this.state);

    this.setState({ 
      text: ''
    });
  }

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render(){
    const { name, text } = this.state;

    return (
      <form className="message-input__form" onSubmit={ this.onSubmit }>
        <TextField
          name="text"
          label="Введите сообщение..."
          onChange={ this.onChange }
          value={ text }
          autoComplete="off" 
          fullWidth 
          autoFocus 
          variant="outlined" 
          id="message-input__text"
        />
        <button type="submit" className="message-input__btn">Отправить сообщение</button>
      </form>
    )
  }
}

export default withStyles(styles)(MsgInput);