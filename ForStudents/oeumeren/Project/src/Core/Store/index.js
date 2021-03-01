import { createStore } from "redux";
import initReducers from "./reducers";

const initStore = () => {
    return createStore(initReducers, {});
}

export default initStore;