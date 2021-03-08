import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';
import App from '@pages/Home';
import { StylesProvider } from '@material-ui/core/styles';

const container = document.querySelector('#app');

ReactDom.render(
    <StylesProvider>
        <div>
            <App />
        </div>
    </StylesProvider>,
    container
);





// let arr = [
//     { name: 'Darth', color: 'red' },
//     { name: 'Leia', color: 'white' },
//     { name: 'Luke', color: 'green' },
//     { name: 'Chewbakka', color: 'brown' }
// ];

// const content = <h2>Hello ReactWars</h2>;
// const btn = <button onClick={handlClick}>Нажми меня</button>;

// const App = () => {
//     const arrObj = arr.map((el, i) => <div key={i} className="character">
//         <p><b>{el.name}:</b> <span>{el.color}</span></p>
//     </div>);

//     return <div>
//         {content}
//         {arrObj}
//         {btn}
//     </div>;
// }

// ReactDom.render(<App />, container);

// // let handlClick = () => {        
// //     console.log("мы в обработчике кнопки"); 
// //     arr.push({ name: 'Norm', color: 'none' });
// //     ReactDom.render(<App />, container);
// // };

// function handlClick() {
//     console.log("мы в обработчике кнопки");
//     arr.push({ name: 'Norm', color: 'none' });
//     ReactDom.render(<App />, container);
// };
