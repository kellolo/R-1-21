//export const FILTER_MSG ='@@messages/FILTER';
export const loadMessages = () => ({
    type:'LOAD_MSG',
});

export const sendMessage = (name, text) => ({
    type: 'SEND_MSG',
    payload: { name, text, date: new Date() }
});
/*export const filterMessage = (searchWord) => ({
    type: FILTER_MSG,
    searchWord
});*/