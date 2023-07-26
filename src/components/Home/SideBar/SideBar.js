import React, { useState } from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

export default function SideBar({ allProjects, conversations, setChatMessages, setPreLoader, setSessionId, setProjectId, setChatReply }) {

    const API_BASE_URL = 'https://app.customgpt.ai/api/v1';
    const useStyles = makeStyles({
        paper: {
            height: 'calc(100% - 64px)',
            top: 64
        }

    })
    const classes = useStyles();

    const handleChat = async (value) => {
        setPreLoader(true);

        const { session_id, project_id } = value;
        const options = {
            method: 'GET',
            url: 'http://localhost:8000/send-message',
            params: { project_id: project_id, session_id: session_id }
        };
        try {


            setSessionId(session_id);
            setProjectId(project_id);

            

            const response = await axios.request(options);

            setChatMessages(response.data.data.messages.data);
            setChatReply([]);
            setPreLoader(false);
        } catch (error) {
            console.error('getConversationMessagesError', error);
        }
    };

    return (
        <>
            <Drawer
                anchor={'left'}
                open={false}
                // onClose={() => setOpenPdfDrawer(false)}
                PaperProps={{
                    sx: { width: "20%", height: 'calc(100% - 112px)', top: 112, padding: '20px' },

                    top: 64
                }}

                variant="permanent"
            >
                <>
                    <h1><b>Conversations</b></h1>
                    <TabPanel value='one'>
                        <ul>
                            {conversations.map((value, index) =>
                                <li key={index}>
                                    <button onClick={() => handleChat(value)}>
                                        {value.name}
                                    </button>
                                    <hr />

                                </li>

                            )}
                        </ul>
                    </TabPanel>

                </>
            </Drawer>

        </>
    )
}
