require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());

const PORT = process.env.PORT || 9000;

server.get('/', (req, res) => {
    res.status(200).json([
        {id: 1, username: 'User1', email: 'User1@email.com'},
        {id: 2, username: 'User2', email: 'User2@email.com'},
        {id: 3, username: 'User3', email: 'User3@email.com'},
        {id: 4, username: 'User4', email: 'User4@email.com'}
    ])
})

server.listen(PORT, () => {
    console.log(`server running/listening on ${PORT}`);
})