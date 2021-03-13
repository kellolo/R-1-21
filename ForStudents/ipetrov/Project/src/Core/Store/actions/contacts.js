
export const removeContact = (chatId) => ({
    type: 'REMOVE_CTC',
    payload: { chatId }
});

export const addContact = (chatId, name) => ({
    type: 'ADD_CTC',
    payload: { chatId, name }
});