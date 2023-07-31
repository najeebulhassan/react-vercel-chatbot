import React, { useState, useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import logo from "../../../../assets/images/logo.png";

export default function Answers({ message, isReply }) {
    const [displayedText, setDisplayedText] = useState('');
    const [textData, setTextData] = useState('');
    const [preLoaderText, setPreLoaderText] = useState(['InstructorX analyzing', 'InstructorX is checking the accurate answer for you', 'InstructorX has found the answer']);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Replace 'streamedText' with the actual response you receive from the API
        if (message.openai_response) {
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
        }
    }, [message.openai_response]);

    // Fetch data from the API and set the state
    useEffect(() => {
        // Your API call to fetch the data goes here...
        // For demonstration purposes, I'm using a mock data response
        if (message.openai_response) {
            const mockApiResponse = displayedText;

            setTextData(mockApiResponse);
        }
    }, [textData, displayedText, message.openai_response]);


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





    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);

        if (message.openai_response) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
        };
    }, [message.openai_response]);

    const handleCopyPara = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(displayedText);
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
        <div className="group relative mb-4 flex items-start md:-ml-12">
            <div
                className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-background"
            >
                {/* {message && */}
                <img src={logo} alt="chatlogo" />
                {/* } */}
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                <div
                    className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                >
                    <div className="mb-2 last:mb-0">
                        {message.openai_response
                            ?
                            (textData &&
                                renderParagraphs()
                            )
                            :
                            <div className="loader" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                                <span>
                                    {
                                        currentIndex < preLoaderText.length
                                            ? preLoaderText[currentIndex]
                                            : preLoaderText[preLoaderText.length - 1]
                                    }

                                </span>
                                <div className="dot-carousel"></div>
                            </div>
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
    )
}
