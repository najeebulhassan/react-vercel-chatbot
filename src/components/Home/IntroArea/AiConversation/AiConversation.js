import React, { useEffect, useState, useRef } from 'react';
import logo from "../../../../assets/images/logo.png";
import { makeStyles } from '@mui/styles';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AiConversation({ message, isReply, question, checked }) {
    const [displayedText, setDisplayedText] = useState('');
    const [textData, setTextData] = useState('');



    useEffect(() => {
        // Replace 'streamedText' with the actual response you receive from the API
        const fullText = message.openai_response;
        const words = fullText.split(' ');

        let currentIndex = 0;
        const wordDisplayInterval = 100; // Time (in milliseconds) between displaying each word

        const interval = setInterval(() => {
            if (currentIndex < words.length) {
                setDisplayedText((prevDisplayedText) => prevDisplayedText + words[currentIndex] + ' ');
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, wordDisplayInterval);

        return () => {
            clearInterval(interval);
        };
    }, [message]);

    // Fetch data from the API and set the state
    useEffect(() => {
        // Your API call to fetch the data goes here...
        // For demonstration purposes, I'm using a mock data response
        const mockApiResponse = isReply ? displayedText : message.openai_response;

        setTextData(mockApiResponse);
    }, [textData, displayedText]);


    // Function to render paragraphs and organized points
    const renderParagraphs = () => {
        const paragraphs = textData.split('\n');

        return paragraphs.map((paragraph, index) => {
            // Check if the paragraph starts with a number followed by a dot
            // or a bullet point to render as a numbered or bulleted list
            if (paragraph.match(/^\s*\d+\.\s+/) || paragraph.match(/^\s*[\u2022\u2023\u25E6\u2043]\s+/)) {
                // For numbered list, use <ol> and <li> tags
                // For bulleted list, use <ul> and <li> tags
                return (
                    <ul key={index}>
                        <li>{paragraph}</li>
                    </ul>
                );
            } else {
                // Render regular paragraphs using <p> tags
                return <p style={{ marginTop: "0px" }} key={index}>{paragraph}</p>;
            }
        });
    };


    const inputRef = useRef(null);
    const handleCopyQuery = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(isReply ? question : message.user_query)

        // inputRef.current.select();
        // document.execCommand('copy');
        // // Optionally, you can show a notification or perform any other action after copying.
        // // alert('Copied to clipboard!');
        // isReply ? question : message.user_query
        toast.success("Copied to clipboard!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000, //3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide
        });

    };

    const handleCopyPara = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(displayedText)
        console.log('handleCopyPara function called');
        toast.success("Copied to clipboard!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000, //3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide
        });
    }

    return (
        <div className="relative mx-auto max-w-2xl px-4">
            <div>
                <div className="group relative mb-4 flex items-start md:-ml-12" style={{ alignItems: "center" }}>
                    <div
                        className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-background"
                    >
                        {message.user_query &&
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z"
                                ></path>
                            </svg>
                        }
                    </div>
                    <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1" style={{ padding: '1em', background: checked ? "black" : "white" }}>
                        <div
                            className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                        >
                            {/* <input
                                ref={inputRef}
                                type="text"
                                defaultValue={isReply ? question : message.user_query}
                                readOnly
                                className="mb-2 last:mb-0"
                                style={{ outline: 'none' }}
                            /> */}
                            <p className="mb-2 last:mb-0">{isReply ? question : message.user_query}</p>
                        </div>
                        <div
                            className="flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0"
                        >
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                onClick={handleCopyQuery}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"
                                    ></path></svg
                                ><span className="sr-only">Copy message</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="group relative mb-4 flex items-start md:-ml-12">
                    <div
                        className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-background"
                    >
                        {message.openai_response &&
                            <img src={logo} alt="chatlogo" />
                        }
                    </div>
                    <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                        <div
                            className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                        >
                            <div className="mb-2 last:mb-0">
                                {
                                    textData ? (
                                        renderParagraphs()
                                    ) : (
                                        <p>Loading data...</p>
                                    )

                                }
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0"
                        >
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                onClick={handleCopyPara}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"
                                    ></path></svg
                                ><span className="sr-only">Copy message</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full my-4 md:my-8"
                ></div>
            </div>

        </div>
    )
}
