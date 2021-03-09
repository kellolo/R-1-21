const express = require('express');
const chatController = require('./controllers/chat');
const app = express();

app.use(express.json());

/*app.get('/app/:id', (req, res) => {
    const id = req.params.id;
    res.json({ some_data: `for user ${id}`});
})*/

app.get('/chats', chatController.load);
//app.get('/chats', chatController.load);
//app.get('/chats', chatController.load);
//app.get('/chats', chatController.load);

app.listen(9090, () => {
    console.log('listen port 9090...');
});

