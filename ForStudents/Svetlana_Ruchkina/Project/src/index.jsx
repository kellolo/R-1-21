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
    <p><b>{el.name}:</b> <span>{el.color}</span></p>
</div>);

const content = <h2>Hello ReactWars</h2>;
const btn = <button onClick={handlClick}>Нажми меня</button >;

ReactDom.render(
    <div>
        {content}
        {arrObj}
        {btn}
    </div>
    , container);

let handlClick = () => {        //  не работает((((((
    console.log("мы в обработчике кнопки"); // хотя в обработчик попадаем
    arr.push({ name: 'Norm', color: 'none' });
    ReactDom.render(
        <div>
            {content}
            {arrObj}
            {btn}
        </div>
        , container);
}
