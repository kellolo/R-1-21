import { sendMessage } from '@actions/messages';
import { updateChats, lastMessage } from '@actions/chats';

export default store => next => action => {
  switch (action.type) {
    case 'SEND_MSG': {
      if (action.name == 'Я') {
        setTimeout(() => {
          const { messagesReducer, chatsReducer } = store.getState();
          const messageId = messagesReducer.messages.length + 1;
          let botName = '';
          const botMessage = `"${ action.text }" Ну и что ты этим хотел сказать?!`;

          chatsReducer.activeChats.forEach(element => {
              if (element.id == action.chatId) {
                botName = element.name;
              };
          });

          store.dispatch(sendMessage(action.chatId, messageId, botName, botMessage));
          store.dispatch(updateChats(action.chatId, messageId));
          return store.dispatch(lastMessage(action.chatId, botMessage));
        }, 3000);
      };
    }
  };

  return next(action);
};