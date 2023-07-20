import React, { useState } from 'react'
import ChatBox from './ChatBox/ChatBox';
import ColorScheme from './ColorScheme/ColorScheme';
import IntroArea from './IntroArea/IntroArea';
import Header from './Header/Header';
import Tooltip from '@mui/material/Tooltip';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

export default function Home() {
    const [checked, setChecked] = useState(false);
    const [sourceId, setSourceId] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [preLoader, setPreLoader] = useState(false);

    return (
        <div className="font-sans antialiased __variable_0ec1f4 __variable_71fa92">
            <Tooltip title="Notes" placement="right-start">
                <SpeakerNotesIcon style={{
                    position: 'absolute', // Position the icon absolutely
                    top: '150px', // Adjust the top position as needed
                    left: '20px', // Adjust the left position as needed
                    width: '30px', // Adjust the width of the icon as needed
                    height: '30px', // Adjust the height of the icon as needed
                }} />
            </Tooltip>
            <div
                style={{
                    position: 'fixed',
                    zIndex: 9999,
                    top: '16px',
                    left: '16px',
                    right: '16px',
                    bottom: '16px',
                    pointerEvents: 'none'
                }}
            ></div>
            <ColorScheme checked={checked} />
            <div className="flex flex-col min-h-screen">
                <Header checked={checked} setChecked={setChecked} />
                <main className="flex flex-col flex-1 bg-muted/50">
                    <IntroArea sourceId={sourceId} chatMessages={chatMessages} preLoader={preLoader} />

                    <ChatBox sourceId={sourceId} setSourceId={setSourceId} chatMessages={chatMessages} setChatMessages={setChatMessages} setPreLoader={setPreLoader} />
                </main>
            </div>
        </div>
    )
}
