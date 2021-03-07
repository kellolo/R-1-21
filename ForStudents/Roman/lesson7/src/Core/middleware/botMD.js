import { sendMessage } from '@actions/messages';

export default store => next => action => {
  switch(action.type) {
    case 'SEND_MSG': {
      if (action.payload.name == 'Username') {
        setTimeout(() => {
          return store.dispatch(sendMessage('Bot', 'Hello I am Bot'));
        }, 1000);
      }
    }
  }
  return next(action);
};