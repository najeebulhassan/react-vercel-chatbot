import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AiConversation from './AiConversation/AiConversation';
import Questions from './Questions/Questions';
import Answers from './Answers/Answers';

function IntroArea({ questions, chatMessages, preLoader, chatReply, checked }) {
    const conversationData = questions.map((question, index) => {
        return {
            question,
            answer: chatReply[index]?.data || '' // If answer is not available yet, use an empty string
        };
    });
    return (
        <div className="pb-[200px] pt-4 md:pt-10" style={{ paddingTop: "5rem" }} >
            {chatMessages.length === 0 &&
                <div className={`max-w-2xl px-4 mx-auto`}>
                    <div className={`p-8 border rounded-lg bg-background ${preLoader ? 'loader' : ""}`}>
                        <h1 className="mb-4 text-lg font-semibold" style={{ lineHeight: "1.3rem" }}>
                            I am InstructorX, your dedicated Instructor Pilot.
                        </h1>
                        <p className="mb-2 leading-normal text-muted-foreground" style={{ marginBottom: "0px" }}>
                            Ready to train you and tackle your decision-making.

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
                            Let's take one or many flights together!
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

            {chatMessages && chatMessages.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at)).map((message, index) => (
                <AiConversation message={message} key={index} checked={checked} />
            ))}

            {/* {chatReply.map((reply, index) =>
                <AiConversation message={reply.data} question={questions} key={index} isReply={true} />
            )} */}

            <div className="relative mx-auto max-w-2xl px-4">
                <div>
                    {conversationData.map((item, index) => (
                        <React.Fragment key={index}>
                            {console.log("ïtemmmm", item.question)}
                            <Questions message={item.question} question={item.question} isReply={true} checked={checked} />
                            <Answers message={item.answer} />

                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-4 md:my-8"
                            ></div>
                        </React.Fragment>
                    ))}

                </div>
            </div>

            {/* {preLoader &&
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <CircularProgress />
                </Box>
            } */}
        </div>
    )
}

export default IntroArea