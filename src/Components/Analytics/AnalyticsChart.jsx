import React, { Fragment } from 'react';
import { Box, Typography, Avatar, Grid, useMediaQuery } from '@mui/material';
import Chart from './Chart';
import totalReach from '../../assets/Total Reach.png';
import totalPaid from '../../assets/TotalPaid Reach.png';
import totalOrganic from '../../assets/Total Organic Reach.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const myData = [
    {
        icon: totalReach,
        text: 'Total Reach',
        value: '135K',
    },
    {
        icon: totalPaid,
        text: 'Total Paid Reach',
        value: '115K',
    },
    {
        icon: totalOrganic,
        text: 'Total Organic Reach',
        value: '35K',
    },
];

const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(1030));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabStyles = {
        borderRadius: '6px',
        m: 0.8,
        fontSize: { md: '12px', xs: '10px' },
        backgroundColor: 'transparent',
        color: 'text.primary',
        '&.Mui-selected': {
            color: 'text.primary',
            backgroundColor: '#FFFFFF',
        },

        '&.MuiTab-root': {
            // minHeight: '40px',
        },
    };

    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#FFFFFF', p: 2, mb: 2, borderRadius: '10px' }}>
                <Box
                    sx={{
                        display: 'flex',

                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={isSmallScreen ? 12 : 7}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    p: 1,
                                    width: '100%',
                                    backgroundColor: '#FFFFFF',
                                }}
                            >
                                {myData.map(({ icon, text, value }, index) => (
                                    <Box key={index}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}
                                        >
                                            <Box>
                                                <Avatar
                                                    alt="Total Reaches"
                                                    src={icon}
                                                    sx={{
                                                        width: { md: 50, sm: 40, xs: 30 },
                                                        height: { md: 50, sm: 40, xs: 30 },
                                                        borderRadius: '20px',
                                                    }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    width: '100%',
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle"
                                                    sx={{
                                                        fontWeight: 400,
                                                        fontSize: {
                                                            md: '16px',
                                                            sm: '14px',
                                                            xs: '10px',
                                                        },

                                                        color: '#A9ABB0',
                                                        pr: 1,
                                                    }}
                                                >
                                                    {text}
                                                </Typography>

                                                <Typography
                                                    variant="subtitle"
                                                    sx={{
                                                        fontWeight: 800,
                                                        fontSize: {
                                                            md: '16px',
                                                            sm: '14px',
                                                            xs: '10px',
                                                        },

                                                        color: '#1C1F37',
                                                    }}
                                                >
                                                    {value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={isSmallScreen ? 12 : 5}
                            sx={{
                                display: 'flex',
                                justifyContent: {
                                    md: isSmallScreen ? 'center' : 'flex-end',
                                    xs: 'center',
                                },
                                alignItems: 'center',
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                indicatorColor="none"
                                sx={{
                                    backgroundColor: '#F5F7FB',
                                }}
                            >
                                <Tab
                                    label="Daily"
                                    {...a11yProps(0)}
                                    sx={{
                                        ...tabStyles,
                                        minWidth: { md: '80px' },
                                    }}
                                />
                                <Tab
                                    label="Weekly"
                                    {...a11yProps(1)}
                                    sx={{
                                        ...tabStyles,

                                        minWidth: { md: '80px' },
                                    }}
                                />
                                <Tab
                                    label="Monthly"
                                    {...a11yProps(2)}
                                    sx={{
                                        ...tabStyles,
                                        minWidth: { md: '80px' },
                                    }}
                                />
                            </Tabs>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <CustomTabPanel value={value} index={0}>
                        <Chart />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Chart />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Chart />
                    </CustomTabPanel>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Dashboard;
