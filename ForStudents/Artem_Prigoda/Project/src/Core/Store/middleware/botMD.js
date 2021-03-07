import { sendMessage } from '@actions/messages';

export default store => next => action => {
	switch(action.type) {
		case 'SEND_MSG': 
			if(action.name === 'owner') {
				setTimeout(() => {
					return store.dispatch(sendMessage(action.chatId, Date.now(), 'Hello i am bot', 'bot'))
				}, 1000);
			}		
	}
	return next(action);
};