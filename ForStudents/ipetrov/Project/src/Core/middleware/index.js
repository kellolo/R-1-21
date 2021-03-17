import { apiMiddleware } from 'redux-api-middleware';
import botMD from './botMD';
import highlight from './highlight';

export default [ apiMiddleware, botMD, highlight ];