const express = require('express');
const fs = require('fs');




const app = express();

app.use(express.json());


app.get('/',(req, res) => {
	//res.sendStatus(200);
	res.send();
});
app.get('/messages/',(req, res) => {
	const result =  fs.readFileSync('./server/messages/messages.json', 'utf-8');
      res.json(result);
});

app.listen(9090, () => {
  console.log('Listen port 9090...');
});