import React, { useState } from 'react';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import logo from "../../../assets/images/logo.png";

export default function ChatBox({ questions, setQuestions, SourceId, chatMessages, setChatReply, setPreLoader, projectId, sessionId, backendUrl }) {

    const [newMessage, setNewMessage] = useState('');

    console.log("projectId, sessionId", projectId, sessionId, "questions", questions);

    const handleChat = async () => {
        setPreLoader(true);
        // setting up array of questions asked 
        setQuestions((prevQuestions) => [...prevQuestions, newMessage]);
        const options = {
            method: 'POST',
            url: `${backendUrl}/send-message`,
            params: { project_id: projectId, session_id: sessionId, send_message: newMessage }
        };

        try {

            axios.request(options)
                .then(response => {

                    const newChatReply = response.data;
                    setChatReply((prevChatReply) => [...prevChatReply, newChatReply]);
                })
                .catch(error => {
                    console.error("errorReply", error);
                });


            setNewMessage('');
            setPreLoader(false);
        } catch (error) {
            console.error('Failed to send chat message:', error);
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
    };

    const handleEmptyValue = () => {
        const message = "Ask InstructorX Something!"
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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent form submission on Enter key
            if (newMessage === "") {
                handleEmptyValue()
            } else {
                handleChat();
            }
        }
    };



    return (
        <>
            <div
                className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% dark:from-background/10 dark:from-10% dark:to-background/80"
            >

                {/* Scroll button  */}
                {/* <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2 opacity-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-4 w-4"
                    >
                        <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z"></path>
                    </svg>
                    <span className="sr-only">Scroll to bottom</span>
                </button> */}


                <div className="mx-auto sm:max-w-2xl sm:px-4">
                    <div className="flex h-12 items-center justify-center"></div>
                    <div
                        className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4"
                    >
                        {/* only for demo  */}
                        <div style={{ paddingLeft: '0px' }}
                            className="relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12"
                        >
                            {/* <div
                                className="inline-flex items-center justify-center text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"
                                data-state="closed"
                            onClick={handleClick}
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                    <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"
                                    ></path>
                                </svg>
                                <span className="sr-only">New Chat</span>
                            </div> */}
                            <textarea
                                tabIndex="0"
                                rows="1"
                                placeholder="Ask InstructorX..."
                                spellCheck="false"
                                value={newMessage}
                                className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                                onKeyDown={handleKeyPress}
                                onChange={(event) => setNewMessage(event.target.value)}
                            ></textarea>
                            <div className="absolute right-0 top-4 sm:right-4">
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 h-8 w-8 p-0"
                                    type="submit"
                                    disabled={false}
                                    data-state="closed"
                                    onClick={() => newMessage === "" ? handleEmptyValue() : handleChat()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Send message</span>
                                </button>
                            </div>
                        </div>
                        <div className="px-2 text-center flex items-center text-xs leading-normal text-muted-foreground justify-center"    >
                            <p>
                                Powered By Versein Company
                            </p>
                            <img src={logo} alt='footerlogo' style={{ width: "2.5em" }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
