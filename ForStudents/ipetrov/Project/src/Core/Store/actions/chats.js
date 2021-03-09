

export const loadChat = () => ({
    type: 'LOAD_CHT'
});

export const addChat = (chatId, name) => ({
    type: 'ADD_CHT',
    payload: { chatId, name }
});

export const removeChat = (name, text, chatId) => ({
    type: 'REM_CHT',
    payload: { name, text, chatId }
});

export const highlight = (name, chatId) => ({
    type: 'HGHLGHT',
    payload: { name, chatId }
});

export const unhighlight = (name, chatId) => ({
    type: 'UNHGHLGHT',
    payload: { name, chatId }
});