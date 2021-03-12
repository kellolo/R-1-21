import update from "react-addons-update";



const storeMessages = {
	messages: [
		{ name: 'owner', text: 'Hey!', id: '1' },
		{ name: 'owner', text: 'How are you?', id: '2' },
	]
};

export default (store = storeMessages, action) => {
	switch (action.type) {
		case 'SEND_MSG': {
			return update(store, {messages: {$push: [{name: action.name, text: action.text, id: action.messageId}]}});
		}
		default: {
			return store;
		}
	}
}