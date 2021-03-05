export const FILTER_MSG ='@@messages/FILTER';
export const loadMessages = () => ({
    type:'LOAD_MSG',
});

export const filterMessage = (searchWord) => ({
    type: FILTER_MSG,
    searchWord
});