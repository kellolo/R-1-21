


const storeMessages = {
	messages: [
		{ name: 'owner', text: 'Hey!' },
		{ name: 'owner', text: 'How are you?' },
	]
};

export default (store = storeMessages, action) => {
	switch (action.type) {
		case 'LOAD_MSG': {
			return store.messages;
		}
		default: {
			return store;
		}
	}
}