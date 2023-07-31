import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import logo from '../../../assets/images/instructorailogo.png';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import SideBar from '../SideBar/SideBar';

export default function Header({ checked, setChecked, allProjects, conversations, setChatMessages, setPreLoader, setProjectId, setSessionId, setChatReply, setProjectIndex, backendUrl, setQuestions }) {
    const [value, setValue] = useState('one');

    const handleTabValue = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    const useStyles = makeStyles({
        tabs: {

            "& .MuiTabs-indicator": {
                backgroundColor: checked ? '#FAFAFA' : '#09090B',
                // height: 3,
            },
            "& .MuiTab-root": {
                color: checked ? '#FAFAFA' : "#71717A"
            },
            "& .MuiTab-root.Mui-selected": {
                color: checked ? '#FAFAFA' : '#09090B',
                fontWeight: "bold"
            }
        },
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 999, // Set a higher z-index to ensure the header stays on top of other elements
            // Add any other styles you want for your header
        },

    })

    const classes = useStyles();
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 40,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(24px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : 'white',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
            color: !checked ? "white" : "black"
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.35)' : 'black',
            boxSizing: 'border-box',
        },
    }));

    // Setting the index to get the project data according to the selected project in tab 

    const handleTabClick = (event, index) => {
        setProjectIndex(index);
    };


    return (
        <header
            className={classes.header}
        >
            <div className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
                <div className="flex items-center gap-1">
                    {/* <Link rel="nofollow" to="#"
                    > */}
                    {/* <img src={logo} alt="headerlogo" width='90%' /> */}
                    {/* <svg
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
                        </g>
                    </svg>
                    <svg
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
                    </svg> */}
                    {/* </Link> */}
                    <div className="flex items-center">
                        {/* <svg
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
                    </svg> */}
                        <Link
                            to="#"
                        // className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4 py-2 ml-2"
                        >
                            {/* <svg
                            aria-label="Vercel logomark"
                            role="img"
                            viewBox="0 0 74 64"
                            className="h-4 w-4 mr-2"
                        >
                            <path
                                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                                fill="currentColor"
                            ></path>
                        </svg> */}
                            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>
                                InstructorX
                                {/* <span className="hidden sm:inline"> with Vercel</span> */}
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-2">

                    <Stack direction="row" spacing={1} alignItems="center">
                        {!checked &&
                            <Typography>
                                {/* <LightModeIcon style={{ width: "1rem" }} /> */}
                                <span style={{
                                    fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: "9px", fontStyle: "normal"
                                    , lineHeight: "normal"
                                }}>
                                    Dark Mode
                                </span>
                            </Typography>

                        }
                        {checked &&
                            <Typography>
                                {/* <DarkModeIcon style={{ width: "1rem" }} /> */}
                                <span style={{
                                    fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: "9px", fontStyle: "normal"
                                    , lineHeight: "normal"
                                }}>
                                    Light Mode
                                </span>
                            </Typography>

                        }
                        <AntSwitch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'ant design' }} />

                    </Stack>
                    {/* <Link
                        // target="_blank"
                        to="#"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4 py-2"
                    >
                        
                        <span className="ml-2 hidden md:flex">Add Notes</span>
                    </Link> */}
                    {/* <Link
                        to="#"
                        // target="_blank"
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
                            ></path>
                        </svg >
                        <span className="hidden sm:block">
                            Pilot
                        </span>
                        <span className="sm:hidden">
                            Pilot
                        </span>
                    </Link> */}
                </div>
            </div>
            {/* <TabContext value={value}> uncomment this line  */}
            {/* uncomment start  */}
            {/* <Box sx={{ width: '100%' }}>
                    <TabList
                        onChange={handleTabValue}
                        className={classes.tabs}
                    >
                        {allProjects.map((value, index) =>

                            < Tab key={index} value='one' label={value.project_name} onClick={(event) => handleTabClick(event, index)} />
                        )}
                    </TabList>
                </Box> */}
            {/* uncomment end  */}

            <SideBar allProjects={allProjects} conversations={conversations} setChatMessages={setChatMessages} setPreLoader={setPreLoader}
                setProjectId={setProjectId} setSessionId={setSessionId} setChatReply={setChatReply} backendUrl={backendUrl} setQuestions={setQuestions} />
            {/* </TabContext> uncomment this line  */}
        </header >
    )
}
