import React, { Fragment } from 'react';
import {
    Box,
    Button,
    Toolbar,
    CssBaseline,
    Typography,
    IconButton,
    styled,
    useMediaQuery,
    Hidden,
    InputBase,
    InputAdornment,
    AvatarGroup,
    Avatar,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {
    ChevronLeft,
    ChevronRight,
    KeyboardArrowDown,
    Notifications,
    Search,
} from '@mui/icons-material';
import logo from '../assets/logo.png';
import question from '../assets/help.png';

import { SideBarArray } from '../utils/Constant';
import AnalyticsDashboard from '../Pages/AnalyticsDashborard';
import { NavLink, Route, Routes } from 'react-router-dom';
import MobileDrawer from './MobileDrawer';
import Dashboard from '../Pages/Dashboard';
import Content from './ContentReach/Content';

const drawerWidth = 269;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const StyledLink = styled(NavLink)({
    textDecoration: 'none',
});

const SideDrawer = () => {
    const matchesQuery = useMediaQuery('(max-width:980px)');
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                open={!open}
                sx={{
                    py: 1,
                    bgcolor: '#fff',
                    zIndex: open ? 100 : 10000,
                    width: matchesQuery ? 'null' : open ? `calc(100% - ${drawerWidth}px)` : '100%',
                    boxShadow: '1px 11px 4px -12px #000',
                }}
            >
                <Toolbar>
                    {!matchesQuery ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 2,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <ChevronRight
                                sx={{
                                    border: '2px solid #DADADA',
                                    color: '#445BFF',
                                    fontSize: '2.6rem',
                                    borderRadius: '50%',
                                    bgcolor: '#fff',
                                }}
                            />
                        </IconButton>
                    ) : (
                        <MobileDrawer />
                    )}
                    <Hidden mdDown>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Box display="flex" alignItems="center" gap="5px">
                                <img
                                    src={logo}
                                    alt=""
                                    style={{
                                        color: '#000',
                                        borderRadius: '10%',
                                        bgcolor: '#F5F7FB',
                                        width: '45px',
                                        marginRight: '7px',
                                    }}
                                />
                                <Box>
                                    <Typography variant="h4">Erza Miller</Typography>
                                    <Typography variant="smallText" color="#000">
                                        erza.miller@email.com
                                    </Typography>
                                </Box>
                                <KeyboardArrowDown
                                    sx={{
                                        color: '#000',
                                        fontSize: '2.7rem',
                                        borderRadius: '50%',
                                        // bgcolor: '#F5F7FB',
                                        p: 1,
                                        ':hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                />
                                <Box
                                    sx={{ bgcolor: '#DADADA', height: '35px', width: '2px' }}
                                ></Box>
                                <InputBase
                                    placeholder="Search"
                                    sx={{ ml: 2 }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Search
                                                sx={{
                                                    color: '#DADADA',
                                                    fontSize: '1.6rem',
                                                    ':hover': {
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            />
                                        </InputAdornment>
                                    }
                                />
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" src={logo} />
                                    <Avatar alt="Travis Howard" src={logo} />
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                    <Avatar
                                        alt="Trevor Henderson"
                                        src="/static/images/avatar/5.jpg"
                                    />
                                </AvatarGroup>
                                <Box
                                    sx={{ bgcolor: '#DADADA', height: '35px', width: '2px' }}
                                ></Box>

                                <Notifications
                                    sx={{
                                        color: '#000',
                                        fontSize: '2.7rem',
                                        borderRadius: '50%',
                                        bgcolor: '#F5F7FB',
                                        p: 1,
                                        ':hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Hidden>
                    <Hidden mdUp>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                color="#000"
                                fontWeight={700}
                            >
                                Dashboard
                            </Typography>
                            <Box display="flex" alignItems="center" gap={1}>
                                <img
                                    src={logo}
                                    alt=""
                                    style={{
                                        color: '#000',
                                        fontSize: '2.7rem',
                                        borderRadius: '50%',
                                        bgcolor: '#F5F7FB',
                                        p: 1,
                                    }}
                                />
                                <Typography variant="h4">Erza Miller</Typography>
                            </Box>
                        </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>

            {!matchesQuery ? (
                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            // overflow: open ? 'visible' : 'hidden',
                            bgcolor: '#081A51',
                            pl: open ? 2 : 1.2,
                            '&::-webkit-scrollbar': {
                                width: '1px',
                            },
                        },
                        position: 'relative',
                    }}
                >
                    <DrawerHeader
                        sx={{
                            justifyContent: 'space-between',
                            py: 1.9,
                            mt: 1,
                        }}
                    >
                        <Box display={'flex'} alignItems={'center'} gap={2}>
                            <img src={logo} alt="" />
                            <Typography variant="h3" color="#fff">
                                Dash
                            </Typography>
                        </Box>
                        {open ? (
                            <IconButton
                                onClick={handleDrawerClose}
                                sx={{
                                    //  ml: { xs: 0, md: 0 },
                                    zIndex: 2000,
                                }}
                            >
                                <ChevronLeft
                                    sx={{
                                        border: '2px solid #DADADA',
                                        color: '#445BFF',
                                        fontSize: '2.6rem',
                                        borderRadius: '50%',
                                        bgcolor: '#fff',
                                    }}
                                />
                            </IconButton>
                        ) : (
                            ''
                        )}
                    </DrawerHeader>

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
                </Drawer>
            ) : (
                ''
            )}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: {
                        xs: '100%',
                        sm: `calc(100% - ${drawerWidth}px)`,
                        md: `calc(100% - ${drawerWidth}px)`,
                    },
                    height: '100%',
                    zindex: '1 !important',
                }}
            >
                <DrawerHeader />
                <Routes>
                    <Route path="/analytics" element={<AnalyticsDashboard />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/communities" element={<Content />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default SideDrawer;
