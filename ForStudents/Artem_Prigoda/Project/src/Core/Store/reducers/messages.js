import update from "react-addons-update";


// { name: 'owner', text: 'Hey!', id: '1' },
// 		{ name: 'owner', text: 'How are you?', id: '2' },
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
		case 'SUCCESS_MESSAGES_LOADING': {
			console.log(typeof(JSON.parse(action.payload.data)));
			let message = {};
			JSON.parse(action.payload.data).forEach(msg => {
					const { text, sender } = msg;
					message = { text, name: sender, id: msg.id};
			});
			return update(store, {
					messages: { $push: [message] },
					isLoading: { $set: false },
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