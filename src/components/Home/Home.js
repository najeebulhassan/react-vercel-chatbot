import React, { useState } from 'react'
import ChatBox from './ChatBox/ChatBox';
import ColorScheme from './ColorScheme/ColorScheme';
import IntroArea from './IntroArea/IntroArea';
import Header from './Header/Header';
export default function Home() {
    const [checked, setChecked] = useState(false);
    const [sourceId, setSourceId] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    return (
        <div className="font-sans antialiased __variable_0ec1f4 __variable_71fa92">
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
                    <IntroArea sourceId={sourceId} chatMessages={chatMessages} />

                    <ChatBox sourceId={sourceId} setSourceId={setSourceId} chatMessages={chatMessages} setChatMessages={setChatMessages} />
                </main>
            </div>
        </div>
    )
}
