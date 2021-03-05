const express = require('express');
const chatController = require('./controllers/chat');

//mongoose - for MongoDB


const app = express();

app.use(express.json());

// responce.send(JSON.stringify({a: 100}));
// response.json({});

// app.get('/app/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ some_data: `for user ${id}` });
// });

app.get('/chats', chatController.load);
// app.get('/chats', chatController.load);
// app.get('/chats', chatController.load);
// app.get('/chats', chatController.load);

app.listen(9090, () => {
  console.log('Listen port 9090...');
});