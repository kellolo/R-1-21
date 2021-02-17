import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/main.scss';
import App from '@pages/Home';

const container = document.querySelector('#app');

ReactDOM.render( 
  <div> 
    <App />
  </div>, 
  container 
);

// const myData = {
//   buttonText: 'Отправить',
//   messageBase: []
// };

// function myButtonAction() {
//   const placeToRender = document.querySelector('.message-container');
//   const inputValue = document.querySelector('input').value;
//   if (inputValue) {
//     myData.messageBase.push(inputValue);
//     console.log(myData.messageBase);
//     document.querySelector('input').value = '';
//     const Messages = myData.messageBase.map(item => {
//     return <span key={item}>{item}</span>;
//   })
//   ReactDOM.render(Messages, placeToRender);
//   }
// };

// const myForm = 
//   <div className="my-form">
//     <input type="text"/>
//     <button onClick={myButtonAction}>{myData.buttonText}</button>
//     <div className="message-container"></div>
//   </div>
// ;

// ReactDOM.render(myForm, container);