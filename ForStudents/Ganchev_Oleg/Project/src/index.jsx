import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

let arr = [
    { name: 'Darth', color: 'red' },
    { name: 'Leia', color: 'white' },
    { name: 'Luke', color: 'green' },
    { name: 'Chewbakka', color: 'brown' }
];

const arrObj = arr.map(el => <div className="character">
                                <p><b>{ el.name }:</b> <span>{ el.color }</span></p>
                            </div>);

const content = <h2>Hello ReactWars </h2>;

let myMessage = <p> </p>;

function addMessage() {
    myMessage = <p>It's OK!</p>;
    myRender();
}

const myButton = <button onClick={addMessage}>Button!</button>;

const myRender = () => {
    ReactDom.render(
        <div>
            { content }
            { arrObj }
            { myMessage }
            { myButton }
        </div>,
        container);
};

myRender();

