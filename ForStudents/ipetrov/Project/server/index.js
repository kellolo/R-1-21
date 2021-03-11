const express = require('express');
const chatController = require('./controllers/chats');
const messagesController = require('./controllers/messages');

const app = express();
app.use(express.json());

/*
app.get('/app/:id', (req, res) => {
    const id = req.params.id;
    res.json( {some_data: `for user ${id}`} )
});
*/

app.get('/chats', chatController.load);

app.get('/chats/:id', (req, res) => {
    const id = req.params.id;
    chatController.load(id, res)} );

app.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    messagesController.load(id, res)} );
    
app.listen(9090, () => {
    console.log('listen 9090...')
});

