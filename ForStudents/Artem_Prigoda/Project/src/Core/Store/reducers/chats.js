import update from 'react-addons-update';


const storeChats = {
	activeChats: {
					1: {name: 'User1', messageList: [1,2]},
					2: {name: 'User2', messageList: [2]},
					3: {name: 'User3', messageList: []},
			},
			contactList: [
				{name: 'User4', id: '4'},
			 	{name: 'User5', id: '5'},
			]
};
 
export default (store = storeChats, action) => {
	switch (action.type) {
		case 'ADD_CHAT': {
      const ind = store.contactList.findIndex(item => item.id === action.id);
			const newChat = store.contactList.find( item => item.id === action.id);
			return update(store, {
				activeChats: { $merge: { 
					[action.id]: {
						name: newChat.name, messageList: []
					}}},
					contactList: {$splice: [[ind,1]]}
			});
		}
		case 'SEND_MSG': {
			return update(store, {
				activeChats: { $merge: { [action.chatId]: {
					name: store.activeChats[action.chatId].name,
					messageList: [...store.activeChats[action.chatId].messageList, action.messageId]
				}}},
			});
		}
		default: {
			return store;
		}
	}
}