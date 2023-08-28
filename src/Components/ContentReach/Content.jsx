import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import AudienceDemographic from './AudienceDemographic';
import Contentdashboard from './Contentdash';
import Eventscheme from './Eventscheme';
const Content = () => {
    return (
        <Box>
            <Grid container spacing={'10px'}>
                <Grid item lg={9}>
                    <Stack gap="20px">
                        <Box>
                            <Contentdashboard/>
                        </Box>
                        <Box>
                            <Eventscheme/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item lg={3}>
                    <AudienceDemographic />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Content;
