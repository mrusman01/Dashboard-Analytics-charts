import React, { Fragment } from 'react';
import { Box, Typography, Grid, Card, Divider, Stack } from '@mui/material';
import Chart from '../Analytics/Chart';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import icon from '../../assets/icon.png';
import smiley from '../../assets/smiley.png';
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
        text: 'Total Reach',
        value: '135K',
    },
    {
        text: 'Total Paid Reach',
        value: '115K',
        itemStyle: { color: '#017EFA' },
    },
    {
        text: 'Total Organic Reach',
        value: '35K',
        itemStyle: { color: '#FD1F9B' },
    },
];

const Contentdashboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabStyles = {
        // border: '1px solid #0DF17F',
        borderRadius: '6px',
        // mr: 1,
        // mb: 1,
        m: 0.8,
        height: '20px',
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
        <>
            <Card sx={{ padding: '10px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            p: 1,
                            width: '100%',
                            backgroundColor: '#FFFFFF',
                        }}
                    >
                        <img src={icon} alt="icon"></img>
                        <Typography>Content Reach Summary</Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { md: 'flex-end', sm: 'center', xs: 'center' },
                            backgroundColor: '#F5F7FB',
                            alignItems: 'center',
                            borderRadius: '6px',
                        }}
                    >
                        <Box sx={{}}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                indicatorColor="none"
                            >
                                <Tab label="Daily" {...a11yProps(0)} sx={tabStyles} />
                                <Tab label="Weekly" {...a11yProps(1)} sx={tabStyles} />
                                <Tab label="Monthly" {...a11yProps(2)} sx={tabStyles} />
                            </Tabs>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ pt: '5px' }}></Divider>
                {/* ---------------graph--------------------- */}
                <Grid container alignItems="center" spacing={'20px'}>
                    <Grid item lg={9.5} md={9}>
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
                    </Grid>
                    <Grid item lg={2.5} md={3}>
                        {myData.map(({ text, value }, index) => (
                            <Box key={index}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: '#F5F7FB',
                                        alignItems: 'center',
                                        // pt:'20px',
                                        // pb:'20px'
                                        p: '20px',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle"
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: {
                                                md: '24px',
                                                sm: '18px',
                                                xs: '12px',
                                            },
                                            // color: 'text.primary',
                                            color: '#1C1F37',
                                        }}
                                    >
                                        {value}
                                    </Typography>
                                    <Typography
                                        variant="subtitle"
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: {
                                                md: '16px',
                                                sm: '14px',
                                                xs: '10px',
                                            },
                                            // color: 'text.primary',
                                            color: '#A9ABB0',
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                </Box>
                                <Divider></Divider>
                            </Box>
                        ))}
                        <Box display={'flex'} gap={'5px'} alignItems={'center'} p={'10px'}>
                            <img src={smiley} alt="img" width={'28px'}></img>
                            <Stack>
                                <Typography fontSize={'14px'}>You’re doing good!</Typography>
                                <Typography fontSize={'12px'}>
                                    Your reach performance is 12% better compate to last year
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default Contentdashboard;
