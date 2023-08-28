import React from 'react';
import { Box, Typography } from '@mui/material';
import Chart from '../Analytics/Chart';
import PropTypes from 'prop-types';

import { Download } from '@mui/icons-material';
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

const ReachSummaryChart = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ xs: 'column', md: 'row' }}
                borderRadius="8px"
                background="#FFF"
                boxShadow="0px 5px 10px 0px #F1F2FA"
                p={2}
            >
                <Box display="flex" alignItems="center" gap={{ xs: 8, md: 11 }}>
                    {myData.map(({ value }, index) => (
                        <Box key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant="h3" color="#1C1F37">
                                    {value}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box
                    variant="h4"
                    sx={{
                        borderRadius: '6px',
                        background: '#F2F4FD',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        mt: { xs: '10px', md: 0 },
                    }}
                >
                    <Download />
                    <Typography>CSV</Typography>
                </Box>
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
    );
};

export default ReachSummaryChart;
