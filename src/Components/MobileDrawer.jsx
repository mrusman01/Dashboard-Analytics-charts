import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { ChevronRight } from '@mui/icons-material';
import logo from '../assets/logo.png';
import question from '../assets/help.png';
import { Typography, styled } from '@mui/material';
import { SideBarArray } from '../utils/Constant';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)({
    textDecoration: 'none',
});
const MobileDrawer = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                color: '#fff',
                fontFamily: 'Gilroy',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                display: 'flex',
                alignItems: 'flex-start',
                justifyItems: 'center',
                flexDirection: 'column',
                pl: 4,
                py: 2,
                bgcolor: '#081A51',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <img src={logo} alt="" />
                <Typography variant="h3" color="#fff">
                    Dash
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'left',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant="smallText"
                        color="#51CBFF"
                        sx={{ mt: 3, mb: 1, pl: '3px' }}
                    >
                        {open ? ' MAIN MENU' : ''}
                    </Typography>
                    {SideBarArray.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                {open && index === 2 ? (
                                    <Typography
                                        variant="smallText"
                                        color="#51CBFF"
                                        sx={{ my: 1, pl: '3px' }}
                                    >
                                        Workspace
                                    </Typography>
                                ) : (
                                    ''
                                )}
                                {open && index === 6 ? (
                                    <Typography
                                        variant="smallText"
                                        color="#51CBFF"
                                        sx={{ my: 1, pl: '3px' }}
                                    >
                                        {open ? 'General' : ''}
                                    </Typography>
                                ) : (
                                    ''
                                )}
                                <StyledLink to={item.link}>
                                    <Button
                                        variant="btn1"
                                        sx={{
                                            mt: !open ? 3 : 2,
                                        }}
                                    >
                                        {item.icons}

                                        {open ? item.name : ' '}
                                    </Button>
                                </StyledLink>
                            </Fragment>
                        );
                    })}
                </Box>
                {open ? (
                    <Box pr={3} pb={1}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                background: '#1B2B65',
                                p: 2,
                                mt: 11,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <img src={question} alt="" style={{ marginTop: '-43px' }} />
                                <Typography variant="h2" color="#fff" mb={1}>
                                    Need Help with Dash?
                                </Typography>
                                <Button variant="main-btn"> Go to help center </Button>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <ChevronRight
                            sx={{
                                border: '2px solid #DADADA',
                                color: '#445BFF',
                                fontSize: '2.6rem',
                                borderRadius: '50%',
                                bgcolor: '#fff',
                            }}
                        />
                    </Button>
                    <SwipeableDrawer
                        sx={{
                            '.css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
                                backgroundColor: '#00052C',
                            },
                            //   fontFamily: "Poppins",
                        }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default MobileDrawer;
