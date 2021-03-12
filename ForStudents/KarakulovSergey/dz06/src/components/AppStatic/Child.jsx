import React,{Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

export default class Child extends Component{
    static propTypes = {
        counter: PropTypes.number,
    };
    componentWillMount() {
        console.log('Child componentWillMount');
    }
 
    componentDidMount() {
        console.log('Child componentDidMount');
    }
 
    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }
 
    render() {
        console.log('Child render');
        return (
            <h1>Это компонент Child, counter: {this.props.counter}</h1>
        )
    }
 
}