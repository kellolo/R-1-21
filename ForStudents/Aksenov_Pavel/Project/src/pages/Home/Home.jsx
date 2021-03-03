import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Layout from '@containers/Layout';

export default (props) => {
  const { params: { chatid } } = props.match;

  return <section><Layout userId={ chatid }/></section>
};
