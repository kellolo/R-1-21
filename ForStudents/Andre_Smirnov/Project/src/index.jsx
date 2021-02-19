import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

let arr = [
    { name: 'Darth', color: 'red' },
    { name: 'Leia', color: 'white' },
    { name: 'Luke', color: 'green' },
    { name: 'Chewbakka', color: 'brown' }
];

const arrObj = arr.map(el => <div class="character">
                                <p><b>{ el.name }:</b> <span>{ el.color }</span></p>
                            </div>);

const content = <h2>ReactWars:</h2>;

ReactDom.render(
    <div>
        { content }
        { arrObj }
    </div>
    , container);