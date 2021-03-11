const express = require('express');
const chatsController = require('./controllers/chats');


constapp = express();

app.use(express.json());

// app.get('/app/:id', (req, res) => {
//     const id = req.params.id;
//     res.json({ some_data: 'for user ${id}' });
// });

app.get('./chats', chatsController.load);

app.listen(9090, () => {
    console.log('Listen port 9090...');
});