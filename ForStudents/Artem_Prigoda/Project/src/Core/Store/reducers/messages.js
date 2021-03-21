import update from "react-addons-update";


const storeMessages = {
	messages: [],
	isLoading: false,
};

export default (store = storeMessages, action) => {
	switch (action.type) {
		case 'SEND_MSG': {
			return update(store, {messages: {$push: [{name: action.name, text: action.text, id: action.messageId}]}});
		}
		case 'START_MESSAGES_LOADING': {
			return update(store, {
				 isLoading: { $set: true },
			});
	}
	case 'LOAD_MESSAGES_SUCCESS': {
		return update(store, {
			messages: { $set: action.payload.data }
		});
	}
	
	case 'ERROR_MESSAGES_LOADING': {
			return update(store, {
					isLoading: { $set: false },
			});
	}

		default: {
			return store;
		}
	}
}