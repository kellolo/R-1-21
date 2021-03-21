const express = require("express");
const chatController = require("./controllers/chat");
const contactsController = require("./controllers/contacts");
const userController = require("./controllers/user");
const messagesController = require("./controllers/messages");

const app = express();
app.use(express.json());

app.get("/api/chats/:userId", chatController.load);
app.get("/api/contacts/:userId", contactsController.load);
app.get("/api/messages/:chatId", messagesController.load);
app.get("/api/users/:id", userController.load);

app.listen(9090, () => {
    console.log("Listen port 9090...");
})
