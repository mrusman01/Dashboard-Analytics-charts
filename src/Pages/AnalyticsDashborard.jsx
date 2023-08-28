import React from 'react';
import AnalyticsDashboard from '../Components/Analytics/AnalyticsChart';
import Demographic from '../Components/Demographic/Demographic';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ backgroundColor: '#F8F9FF', px: 3, py: 2 }}>
            <AnalyticsDashboard />
            <Demographic />
        </Box>
    );
};

export default Home;
