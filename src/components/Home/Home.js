import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox/ChatBox';
import ColorScheme from './ColorScheme/ColorScheme';
import IntroArea from './IntroArea/IntroArea';
import Header from './Header/Header';
import Tooltip from '@mui/material/Tooltip';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import axios from 'axios';


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
    const [projectIndex, setProjectIndex] = useState(0);
    const [backendUrl, setBackendUrl] = useState('https://tan-fierce-gazelle.cyclic.app');

    if (process.env.NODE_ENV === 'development') {
        setBackendUrl('http://localhost:8000');
    } else if (process.env.NODE_ENV === 'production') {
        setBackendUrl('https://tan-fierce-gazelle.cyclic.app');
        console.log("backendUrl", backendUrl);
    }
    const fetchData = async () => {

        const projects = {
            accept: 'application/json',
            method: 'GET',
            url: `${backendUrl}/get-projects`
        };



        try {
            const projectsResponse = await axios.request(projects);

            console.log("projectsResponse", projectsResponse.data.data);
            setAllProjects(projectsResponse.data.data.data);

            if (projectsResponse.data.data.data.length > 0) {
                const conversations = {
                    accept: 'application/json',
                    method: 'GET',
                    url: `${backendUrl}/conversations`,
                    params: { project_id: projectsResponse.data.data.data[projectIndex].id }
                };
                const conversationsResponse = await axios.request(conversations);

                setConversations(conversationsResponse.data.data.data);
            }
        } catch (error) {
            console.error('API Error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [projectIndex]);

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
                    setProjectIndex={setProjectIndex}
                    backendUrl={backendUrl}
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
                        backendUrl={backendUrl}
                    />
                </main>
            </div>
        </div>
    );
}
