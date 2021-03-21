
export const loadMessages = () => ({
  type: 'LOAD_MSG'
});

export const sendMessage = (name, text) => ({
  type: 'SEND_MSG',
  payload: { name, text, date: new Date() }
});
// export const filterMessages = (searchWord) => ({
//   type: 'FILTER_MSG',
//   searchWord
// });