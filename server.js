const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config()

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.json('hi')
})

app.post('/send-message', (req, res) => {
    console.log("req.query.project_id", req);
    const getConversationMessagesUrl = `https://app.customgpt.ai/api/v1/projects/${req.query.project_id}/conversations/${req.query.session_id}/messages`;
    const sendConversationMessage = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        data: { prompt: req.query.send_message }
    };
    if (req.query.project_id && req.query.session_id && req.query.send_message !== "") {
        try {

            axios(getConversationMessagesUrl, sendConversationMessage)
                .then(response => {

                    const newChatReply = response.data;
                    console.log("newChatReply", newChatReply);
                    res.json(response.data);
                })
                .catch(error => {
                    console.error("errorReply", error);
                });


        } catch (error) {
            console.error('Failed to send chat message:', error.response.data.error);
            const message = error.response.data.error;
            toast.error(message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000, //3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
        }
    }
})


app.listen(8000, () => console.log(`running on port ${PORT}`))