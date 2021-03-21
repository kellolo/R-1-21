import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

let arr = [
    { name: 'Darth', color: 'red' },
    { name: 'Leia', color: 'white' },
    { name: 'Luke', color: 'green' },
    { name: 'Chewbakka', color: 'brown' }
];

const App = () => {
    const arrObj = arr.map((el, i) => <div key={ i } className="character">
                    <p><b>{ el.name }:</b> <span>{ el.color }</span></p>
                </div>);
    return <div>
        <button onClick={push}>Add</button>
        { arrObj }
    </div>;
};

ReactDom.render(<App messages={arr} />, container);

function push() {
    arr.push({ name: 'SomeBody', color: 'random' });
    ReactDom.render(<App messages={arr} />, container);
};