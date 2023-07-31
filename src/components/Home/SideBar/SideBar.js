import React, { useEffect, useState } from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

export default function SideBar({ setQuestions, conversations, setChatMessages, setPreLoader, setSessionId, setProjectId, setChatReply, backendUrl }) {

    const API_BASE_URL = 'https://app.customgpt.ai/api/v1';
    const useStyles = makeStyles({
        paper: {
            height: 'calc(100% - 64px)',
            top: 64
        }

    })
    const classes = useStyles();
    {/* uncomment start  */ }
    // const handleChat = async (value) => {
    {/* uncomment end  */ }

    useEffect(async () => {

        setPreLoader(true);
        // emptying array of asked questions if new conversation is clicked 
        setQuestions([]);
        // const { session_id, project_id } = value; uncomment this line 
        const project_id = 9723;
        const session_id = 'ff5b0bef-7b0b-41b2-8aca-2beb2900d74e';
        const options = {
            method: 'GET',
            url: `${backendUrl}/send-message`,
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

    }, [])

    {/* uncomment start  */ }
    // };
    {/* uncomment end  */ }
    return (
        <>
            {/* uncomment start  */}
            {/* <Drawer
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
            </Drawer> */}
            {/* uncomment end  */}
        </>
    )
}
