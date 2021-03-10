import { sendMessages } from '@actions/messages';

export default store => next => action => {
  switch (action.type) {
    case 'SEND_MSG': {
      if(action.payload.name == 'Username') {
        setTimeout(()=>{
          return store.dispatch(sendMessages( 'Bot', 'Hello! Im a bot' ));
        }, 500)
      }   
    }
  }
  return next(action);
};