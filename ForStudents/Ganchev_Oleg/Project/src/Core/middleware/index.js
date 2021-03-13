import botMD from './botMD';
import botMD2 from "./botMD2";
import { apiMiddleware } from "redux-api-middleware";

export default [  apiMiddleware, botMD, botMD2 ];