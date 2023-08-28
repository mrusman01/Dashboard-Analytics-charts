import { createTheme } from '@mui/material/styles';

const themeObj = {
    light: {
        text: {
            primary: '#000',
        },
        background: {
            hard: '#fff',
            medium: '#fdfdfd',
            light: '#efefef',
            borderLight: '#bdbdbd',
            shadow: '#000',
            greenColor: 'rgba(27,200,112,1)',
            lightGreen: 'rgba(27,200,112,0.2)',
            redColor: 'rgba(255,0,51,1)',
            lightRed: 'rgba(255,0,51,0.2)',
        },
    },

    dark: {
        text: {
            primary: '#fff',
        },
        background: {
            hard: '#000',
            medium: '#151515',
            light: '#212121',
            borderLight: '#424242',
            shadow: '#000',
            greenColor: 'rgba(27,200,112,1)',
            lightGreen: 'rgba(27,200,112,0.2)',
            redColor: 'rgba(255,0,51,1)',
            lightRed: 'rgba(255,0,51,0.2)',
        },
    },
};

export const createCustomTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            ...themeObj[mode],
            background: {
                default: '#F8F9FF',
                color: '#fff',
            },
        },
        typography: {
            fontFamily: ['Gilroy', 'sans-serif'].join(','),
            test1: {
                fontFamily: 'Gilroy',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 400,
            },
            h1: {
                fontFamily: 'Gilroy',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 700,
            },
            h3: {
                fontFamily: 'Gilroy',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 800,
                color: '#CCD2E3',
            },
            h2: {
                fontFamily: 'Gilroy',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
            },
            h4: {
                fontFamily: 'Gilroy',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: '#1C1F37',
            },
            smallText: {
                fontFamily: 'Gilroy',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
            },
            boldText: {
                color: '#1C1F37',
                fontFamily: 'Gilroy',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: (theme) => `
		    body {
		      background-color: ${theme.palette.mode === 'dark' ? '#131213' : '#fdfdfd'}
		    }
		  `,
            },
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'gradient' },
                        style: {
                            background: 'linear-gradient(97.01deg, #6C7DEB 8.16%, #50A6ED 103.71%)',
                            boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.3)',
                            color: '#fff',
                            fontFamily: '"Poppins", sans-serif',
                            fontStyle: 'normal',
                            fontSize: '16px',
                            lineHeight: '24px',
                            letterSpacing: '0.045em',
                            '&:hover': {
                                background:
                                    'linear-gradient(97.01deg, #50A6ED 8.16%, #6C7DEB 103.71%)',
                            },
                        },
                    },
                    {
                        props: { variant: 'btn1' },
                        style: {
                            color: '#CCD2E3',
                            fontFamily: 'Gilroy',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            display: 'flex',
                            gap: 5,
                            justifyContent: 'flex-start',
                            padding: '5px',
                            margin: '1.5px 0px',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#1B2B65',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                color: '#fff',
                            },
                        },
                    },
                    {
                        props: { variant: 'main-btn' },
                        style: {
                            color: '#FFF',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            borderRadius: '6px',
                            background: '#017EFA',
                        },
                    },
                ],
            },
        },
    });
