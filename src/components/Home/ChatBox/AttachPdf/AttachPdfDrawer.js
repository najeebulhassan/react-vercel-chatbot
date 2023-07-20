import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
// import useStyles from './AttachPdfDrawerStyles.js';

function AttachPdfDrawer({ openPdfDrawer, setOpenPdfDrawer }) {
    const [url, setUrl] = useState('');
    const [sourceId, setSourceId] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [responseContent, setResponseContent] = useState('');
    // const classes = useStyles({});


    const handleChat = async (message) => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual API key
            const headers = {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            };

            const requestBody = {
                sourceId,
                messages: [
                    ...chatMessages,
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            };

            const response = await axios.post('https://api.chatpdf.com/v1/chats/message', requestBody, { headers });
            const { content } = response.data;
            setChatMessages([...chatMessages, { role: 'user', content: message }, { role: 'assistant', content }]);
            setResponseContent(content);
        } catch (error) {
            console.error('Failed to send chat message:', error.message);
        }
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual API key
            const headers = {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            };

            const response = await axios.post('https://api.chatpdf.com/v1/sources/add-url', { url }, { headers });
            const { sourceId } = response.data;
            setSourceId(sourceId);
            console.log('PDF added successfully! Source ID:', sourceId);
        } catch (error) {
            console.error('Failed to add PDF:', error.message);
        }
    };

    return (
        <Drawer
            anchor={'right'}
            open={openPdfDrawer}
            onClose={() => setOpenPdfDrawer(false)}
        >
            <div >
                <div >
                    <h2>Add PDF via URL</h2>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <input id="urlInput" type="text" placeholder='Enter PDF URL...' value={url} onChange={handleUrlChange} required />
                            <button type="submit">Add PDF</button>
                        </div>
                    </form>
                </div>
                {sourceId && (
                    <div>
                        <h3>PDF Added</h3>
                        <p>Source ID: {sourceId}</p>
                        <h3>Chat</h3>
                        {chatMessages.map((message, index) => (
                            <div key={index}>
                                <strong>{message.role}: </strong>
                                {message.content}
                            </div>
                        ))}
                        <input type="text" placeholder="Type your message" onChange={(event) => setNewMessage(event.target.value)} />
                        <button onClick={() => handleChat(newMessage)}>Send</button>
                        {responseContent && (
                            <div>
                                <strong>Assistant: </strong>
                                {responseContent}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Drawer>
    )
}

export default AttachPdfDrawer