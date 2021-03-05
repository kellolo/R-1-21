import { SEND_MSG, sendMsg } from "@actions/messageAction";
import { highlightChat } from "@actions/chatActions";

export default store => next => action => {
    if (action.type === SEND_MSG) {
        if (action.payload.author !== "Robot") {
            setTimeout(() => {
                store.dispatch(sendMsg(action.payload.chatId, (new Date()).getTime().toString(), "Robot", "Привет! Я Робот."));
            }, 500)
        } else {
            store.dispatch(highlightChat(action.payload.chatId, true));

            setTimeout(() => {
                store.dispatch(highlightChat(action.payload.chatId, false));
            }, 3000)
        }
    }

    return next(action);
}