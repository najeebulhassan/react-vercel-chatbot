const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config()

const app = express()
app.use(cors())
// app.get('/', (req, res) => {
//     res.json('hi')
// })

app.get('/get-projects', (req, res) => {

    const API_BASE_URL = 'https://app.customgpt.ai/api/v1';
    const API_HEADERS = {
        accept: 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    };

    try {
        axios.get(`${API_BASE_URL}/projects`, {
            method: 'GET',
            headers: API_HEADERS,
        }).then(response => {

            res.json(response.data)
        })


    } catch (error) {
        console.error('API Error', error);
    }

})

app.get('/conversations', (req, res) => {
    const API_BASE_URL = 'https://app.customgpt.ai/api/v1';
    const API_HEADERS = {
        accept: 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    };
    const projectId = req.query.project_id;
    axios.get(
        `${API_BASE_URL}/projects/${projectId}/conversations`,
        {
            method: 'GET',
            headers: API_HEADERS,
        }
    ).then(response => {
        console.log("response", response);
        res.json(response.data)
    })


})
// dynamic method handling getting messages according to the clicked conversation and having further conversation 

app.all('/send-message', (req, res) => {
    const projectId = req.query.project_id;
    const sessionId = req.query.session_id;
    const userMessage = req.query.send_message;
    const httpMethod = req.method;
    const getConversationMessagesUrl = `https://app.customgpt.ai/api/v1/projects/${projectId}/conversations/${sessionId}/messages`;
    const sendConversationMessage = {
        method: httpMethod,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
    };

    if (userMessage) {
        sendConversationMessage.data = { prompt: userMessage };
    }

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
        }
    }
})


app.listen(8000 || process.env.PORT , () => console.log(`running on port ${PORT}`))