const express = require('express');
const chatController = require('./controllers/chats');
const messagesController = require('./controllers/messages');
const userController = require('./controllers/user');
const contactsController = require('./controllers/contacts');

const app = express();
app.use(express.json());

app.get('/me', userController.load);
app.get('/chats/:id', chatController.load);
app.get('/contacts/:id', contactsController.load);
app.get('/messages/:userId/:id', messagesController.load);
app.post('/messages/:userId/:id', messagesController.write);


app.listen(9090, () => {
    console.log('listen 9090...')
});

