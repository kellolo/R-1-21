// const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
import { apiMiddleware } from 'redux-api-middleware';
import botMD from './botMD';


export default [ apiMiddleware, botMD ];