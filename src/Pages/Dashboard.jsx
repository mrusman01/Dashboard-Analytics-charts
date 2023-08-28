import { Box, Typography } from '@mui/material';
import React from 'react';
import ContextChart from '../Components/Dashboard/ContentChart';

import { KeyboardArrowDown } from '@mui/icons-material';

const Dashboard = () => {
    return (
        <Box sx={{ backgroundColor: '#F8F9FF', px: 3, py: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: { xs: 'center', sm: 'flex-end', md: 'flex-end' },
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                    my: 4,
                    gap: { xs: '13px', sm: '0px', md: '0px' },
                }}
            >
                <Box>
                    <Typography
                        variant="h1"
                        color="#1C1F37"
                        sx={{ fontSize: { xs: '20px', md: '32px' } }}
                        textAlign={{ xs: 'center', sm: 'left', md: 'left' }}
                        mb={{ xs: '5px', sm: '0px', md: '0px' }}
                    >
                        Dashboard
                    </Typography>
                    <Typography
                        variant="h4"
                        color="#6F6F6F"
                        fontWeight={400}
                        sx={{ fontSize: { xs: '12px', md: '16px' } }}
                    >
                        Welcome back, Erza Miller!
                    </Typography>
                </Box>
                <Typography variant="boldText" sx={{ fontSize: { xs: '10px', md: '20px' } }}>
                    Content Reach Summary
                </Typography>
                <Typography
                    variant="h2"
                    display="flex"
                    alignItems="center"
                    sx={{ fontSize: { xs: '10px', md: '14px' } }}
                >
                    Monthly
                    <KeyboardArrowDown
                        sx={{ color: '#017EFA', fontSize: { xs: '1rem', md: '1.4rem' } }}
                    />
                </Typography>
            </Box>
            <ContextChart />
        </Box>
    );
};

export default Dashboard;
