import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox/ChatBox';
import ColorScheme from './ColorScheme/ColorScheme';
import IntroArea from './IntroArea/IntroArea';
import Header from './Header/Header';
import Tooltip from '@mui/material/Tooltip';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import axios from 'axios';

const API_BASE_URL = 'https://app.customgpt.ai/api/v1';
const API_HEADERS = {
    accept: 'application/json',
    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};

export default function Home() {
    const [checked, setChecked] = useState(false);
    const [sourceId, setSourceId] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [preLoader, setPreLoader] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const [projectId, setProjectId] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [chatReply, setChatReply] = useState([]);

    const fetchData = async () => {
        try {
            const projectsResponse = await axios.get(`${API_BASE_URL}/projects`, {
                method: 'GET',
                headers: API_HEADERS,
            });

            
            setAllProjects(projectsResponse.data.data.data);

            if (projectsResponse.data.data.data.length > 0) {
                const projectId = projectsResponse.data.data.data[0].id;
                const conversationsResponse = await axios.get(
                    `${API_BASE_URL}/projects/${projectId}/conversations`,
                    {
                        method: 'GET',
                        headers: API_HEADERS,
                    }
                );

                
                setConversations(conversationsResponse.data.data.data);
            }
        } catch (error) {
            console.error('API Error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="font-sans antialiased __variable_0ec1f4 __variable_71fa92">
            <ColorScheme checked={checked} />
            <div className="flex flex-col min-h-screen">
                <Header
                    checked={checked}
                    setChecked={setChecked}
                    allProjects={allProjects}
                    conversations={conversations}
                    setChatMessages={setChatMessages}
                    setPreLoader={setPreLoader}
                    setSessionId={setSessionId}
                    setProjectId={setProjectId}
                    setChatReply={setChatReply}
                />
                <main className="flex flex-col flex-1 bg-muted/50">
                    <IntroArea
                        sourceId={sourceId}
                        chatMessages={chatMessages}
                        preLoader={preLoader}
                        chatReply={chatReply}

                    />
                    <ChatBox
                        sourceId={sourceId}
                        setSourceId={setSourceId}
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                        setPreLoader={setPreLoader}
                        sessionId={sessionId}
                        projectId={projectId}
                        setChatReply={setChatReply}
                    />
                </main>
            </div>
        </div>
    );
}
