import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Child from './Child.jsx';
import './style.scss';

export default class AppStatic extends Component{
  state = {
    counter:0,
  };
  handleClick = () => {
    this.setState({ 'counter': this.state.counter + 1 })
  };
  render(){
    return(
      <div>
        <Child counter={ this.state.counter } />
        <button onClick={ this.handleClick }>+1</button>
      </div>
    );
  }
}