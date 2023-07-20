import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function IntroArea({ sourceId, chatMessages, preLoader }) {

    return (
        <div className="pb-[200px] pt-4 md:pt-10">
            {chatMessages.length === 0 &&
                <div className="max-w-2xl px-4 mx-auto">
                    <div className="p-8 border rounded-lg bg-background">
                        <h1 className="mb-2 text-lg font-semibold">
                            Welcome, Pilots! I'm your InstructorAI.
                        </h1>
                        <p className="mb-2 leading-normal text-muted-foreground">
                            Ready to guide you, train you, and solve any decision making scenarios you might face instantly.

                            {/* <Link
                                to="#"
                                className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                            >
                                <span>React.js</span>
                                <svg
                                    aria-hidden="true"
                                    height="7"
                                    viewBox="0 0 6 6"
                                    width="7"
                                    className="opacity-70"
                                >
                                    <path
                                        d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                        fill="currentColor"
                                    ></path></svg>
                            </Link>, the
                            <Link
                                href="https://sdk.vercel.ai"
                                target="_blank"
                                className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                            >
                                <span>
                                    Vercel AI SDK
                                </span>
                                <svg
                                    aria-hidden="true"
                                    height="7"
                                    viewBox="0 0 6 6"
                                    width="7"
                                    className="opacity-70"
                                >
                                    <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                        fill="currentColor" ></path>
                                </svg>
                            </Link>, and
                            <Link
                                href="https://vercel.com/storage/kv"
                                target="_blank"
                                className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                            >
                                <span>Vercel KV</span>
                                <svg
                                    aria-hidden="true"
                                    height="7"
                                    viewBox="0 0 6 6"
                                    width="7"
                                    className="opacity-70"
                                >
                                    <path
                                        d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                        fill="currentColor"
                                    >

                                    </path>
                                </svg>
                            </Link>. */}
                        </p>
                        <p className="leading-normal text-muted-foreground">
                            Let's take flight together!
                        </p>
                        {/* <div className="flex flex-col items-start mt-4 space-y-2">
                            <button
                                className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 shadow-none hover:underline h-auto p-0 text-base"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="h-4 w-4 mr-2 text-muted-foreground"
                                >
                                    <path
                                        d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                                    ></path></svg
                                >Explain technical concepts</button
                            ><button
                                className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 shadow-none hover:underline h-auto p-0 text-base"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="h-4 w-4 mr-2 text-muted-foreground"
                                >
                                    <path
                                        d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                                    ></path></svg
                                >Summarize an article</button
                            ><button
                                className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 shadow-none hover:underline h-auto p-0 text-base"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="currentColor"
                                    className="h-4 w-4 mr-2 text-muted-foreground"
                                >
                                    <path
                                        d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                                    ></path></svg
                                >Draft an email
                            </button>
                        </div> */}
                    </div>


                </div>
            }

            {chatMessages && chatMessages.map((message, index) => (
                <>
                    <div key={index + message.role} className="relative mx-auto max-w-2xl px-4">
                        <div>
                            <div className="group relative mb-4 flex items-start md:-ml-12">
                                <div
                                    className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-background"
                                >
                                    {message.role === "user" ?
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
                                        :
                                        <img src={logo} alt="chatlogo" />
                                    }
                                </div>
                                <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                                    <div
                                        className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                                    >
                                        <p className="mb-2 last:mb-0">{message.content}</p>
                                    </div>
                                    <div
                                        className="flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0"
                                    >
                                        <button
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
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
                    <div className="h-px w-full"></div>
                </>
            ))}
            {preLoader &&
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <CircularProgress />
                </Box>
            }
        </div>
    )
}

export default IntroArea