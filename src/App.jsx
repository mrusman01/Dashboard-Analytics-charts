import React, { useContext, useMemo } from 'react';
import { responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider, Backdrop, useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';

import { createCustomTheme } from './utils/createCustomTheme';

import { DataContext } from './utils/ContextAPI';

import SideDrawer from './Components/SideDrawer';

const App = () => {
    const { loader, mode } = useContext(DataContext);

    const theme = useTheme();

    const themeClient = useMemo(() => {
        let theme = createCustomTheme(mode);
        theme = responsiveFontSizes(theme);
        return theme;
    }, [mode]);

    return (
        <>
            <ThemeProvider theme={themeClient}>
                <CssBaseline enableColorScheme />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    limit={3}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={mode}
                />
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loader}
                >
                    <InfinitySpin width="200" color={`${theme.palette.text.primary}`} />
                </Backdrop>

                <SideDrawer />
            </ThemeProvider>
        </>
    );
};

export default App;
