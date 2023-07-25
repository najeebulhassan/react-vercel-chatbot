import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
// import useStyles from './AttachPdfDrawerStyles.js';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AttachPdfDrawer({ openPdfDrawer, setOpenPdfDrawer, setSourceId }) {
    const [url, setUrl] = useState('');

    // const classes = useStyles({});




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

            const message = 'PDF added successfully';
            toast.success(message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000, //3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
            setOpenPdfDrawer(false);
            
        } catch (error) {
            console.error('Failed to add PDF:', error.message);
        }
    };

    return (
        <>
            <div className="toast-container"><ToastContainer limit={2} /></div>
            <Drawer
                anchor={'right'}
                open={openPdfDrawer}
                onClose={() => setOpenPdfDrawer(false)}
                PaperProps={{
                    sx: { width: "50%" },
                }}
            >
                <>

                    <div className="center-container">
                        <div className="form-container">
                            <h1 className="main-heading">Add PDF via URL</h1>
                            <form className="form" onSubmit={handleSubmit}>
                                <input type="text" value={url} className="input-field" placeholder="Enter PDF URL" onChange={handleUrlChange} required />
                                <button type="submit" className="submit-button">Add PDF</button>
                            </form>
                        </div>
                    </div>

                    {/* {sourceId && (
                        <div>
                            <h3>PDF Added</h3>
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
                    )} */}
                </>
            </Drawer>
        </>
    )
}

export default AttachPdfDrawer