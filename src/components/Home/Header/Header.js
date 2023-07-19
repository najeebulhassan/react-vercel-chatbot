import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Header({ checked, setChecked }) {

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    return (
        <header
            className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl"
        >
            <div className="flex items-center">
                <Link target="_blank" rel="nofollow" href="/"
                ><svg
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 dark:hidden"
                >
                        <defs>
                            <linearGradient
                                id="gradient-:R5aqja:-1"
                                x1="10.6889"
                                y1="10.3556"
                                x2="13.8445"
                                y2="14.2667"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                            <linearGradient
                                id="gradient-:R5aqja:-2"
                                x1="11.7555"
                                y1="4.8"
                                x2="11.7376"
                                y2="9.50002"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <mask
                            id="mask0_91_2047"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="1"
                            y="0"
                            width="16"
                            height="16"
                        >
                            <circle cx="9" cy="8" r="8" fill="black"></circle>
                        </mask>
                        <g mask="url(#mask0_91_2047)">
                            <circle cx="9" cy="8" r="8" fill="black"></circle>
                            <path
                                d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
                                fill="url(#gradient-:R5aqja:-1)"
                            ></path>
                            <rect
                                x="11.2222"
                                y="4.8"
                                width="1.06667"
                                height="6.4"
                                fill="url(#gradient-:R5aqja:-2)"
                            ></rect>
                        </g></svg
                    ><svg
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 hidden h-6 w-6 dark:block"
                    >
                        <defs>
                            <linearGradient
                                id="gradient-:R9aqja:-1"
                                x1="10.6889"
                                y1="10.3556"
                                x2="13.8445"
                                y2="14.2667"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="black"></stop>
                                <stop offset="1" stopColor="black" stopOpacity="0"></stop>
                            </linearGradient>
                            <linearGradient
                                id="gradient-:R9aqja:-2"
                                x1="11.7555"
                                y1="4.8"
                                x2="11.7376"
                                y2="9.50002"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="black"></stop>
                                <stop offset="1" stopColor="black" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <mask
                            id="mask0_91_2047"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="1"
                            y="0"
                            width="16"
                            height="16"
                        >
                            <circle cx="9" cy="8" r="8" fill="white"></circle>
                        </mask>
                        <g mask="url(#mask0_91_2047)">
                            <circle cx="9" cy="8" r="8" fill="white"></circle>
                            <path
                                d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
                                fill="url(#gradient-:R9aqja:-1)"
                            ></path>
                            <rect
                                x="11.2222"
                                y="4.8"
                                width="1.06667"
                                height="6.4"
                                fill="url(#gradient-:R9aqja:-2)"
                            ></rect>
                        </g>
                    </svg>
                </Link>
                <div className="flex items-center">
                    <svg
                        fill="none"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 text-muted-foreground/50"
                    >
                        <path d="M16.88 3.549L7.12 20.451"></path>
                    </svg>
                    <Link
                        href="/api/auth/login"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4 py-2 ml-2"
                    >
                        <svg
                            aria-label="Vercel logomark"
                            role="img"
                            viewBox="0 0 74 64"
                            className="h-4 w-4 mr-2"
                        >
                            <path
                                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                                fill="currentColor"
                            ></path></svg
                        ><span
                        >Login<span className="hidden sm:inline"> with Vercel</span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-2">

                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 0 }} checked={checked} onChange={handleChange} />}
                    // label="MUI switch"
                    />

                </FormGroup>
                <Link
                    target="_blank"
                    to="#"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4 py-2"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-4 w-4"
                    >
                        <title>GitHub</title>
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        ></path></svg
                    ><span className="ml-2 hidden md:flex">GitHub</span>
                </Link>
                <Link
                    to="#"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 h-8 px-4 py-2"
                ><svg
                    aria-label="Vercel logomark"
                    role="img"
                    viewBox="0 0 74 64"
                    className="h-4 w-4 mr-2"
                >
                        <path
                            d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                            fill="currentColor"
                        ></path></svg
                    ><span className="hidden sm:block">Deploy to Vercel</span
                    ><span className="sm:hidden">Deploy</span>
                </Link>
            </div>
        </header >
    )
}
