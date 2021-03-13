const options = { hour: 'numeric', minute: 'numeric' };

export const loadMessages = () => ({
    type: 'LOAD_MSG',
});
export const sendMessage = (name, text) => ({
    type: 'SEND_MSG',
    payload: { name, text, date: new Date().toLocaleString('ru-RU', options) }, // объект, который передает информацию в Store
});