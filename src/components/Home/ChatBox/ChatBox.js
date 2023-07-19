import React from 'react'
import { Link } from 'react-router-dom'

export default function ChatBox() {
  return (
    <div
                        className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% dark:from-background/10 dark:from-10% dark:to-background/80"
                    >
                        <button
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
                        </button>
                        <div className="mx-auto sm:max-w-2xl sm:px-4">
                            <div className="flex h-12 items-center justify-center"></div>
                            <div
                                className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4"
                            >
                                <form>
                                    <div
                                        className="relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12"
                                    >
                                        <Link
                                            className="inline-flex items-center justify-center text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"
                                            data-state="closed"
                                            href="/"
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
                                        </Link>
                                        <textarea
                                            tabIndex="0"
                                            rows="1"
                                            placeholder="Send a message."
                                            spellCheck="false"
                                            className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                                        ></textarea>
                                        <div className="absolute right-0 top-4 sm:right-4">
                                            <button
                                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 h-8 w-8 p-0"
                                                type="submit"
                                                disabled=""
                                                data-state="closed"
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
                                </form>
                                <p
                                    className="px-2 text-center text-xs leading-normal text-muted-foreground hidden sm:block"
                                >
                                    Open source AI chatbot built with
                                    <Link
                                        href="https://nextjs.org"
                                        target="_blank"
                                        className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                                    ><span>Next.js</span><svg
                                        aria-hidden="true"
                                        height="7"
                                        viewBox="0 0 6 6"
                                        width="7"
                                        className="opacity-70"
                                    >
                                            <path
                                                d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                                fill="currentColor"
                                            ></path></svg></Link>
                                    and
                                    <Link
                                        href="https://vercel.com/storage/kv"
                                        target="_blank"
                                        className="inline-flex flex-1 justify-center gap-1 leading-4 hover:underline"
                                    ><span>Vercel KV</span>
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
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>
  )
}
