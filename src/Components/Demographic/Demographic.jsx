import React from 'react';
import GenderNestedPieChart from './PieChart';
import { Avatar, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import demo from '../../assets/Demographic.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AudienceAge from './AudienceAge';
import TopChannels from './TopChannels';

const Demographic = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(1100));

    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid
                    item
                    xs={12}
                    md={isSmallScreen ? 12 : 7.8}
                    sx={{
                        height: { md: '400px', sm: '100%', sx: '100%' },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',
                            p: 2,
                            mb: 2,
                            borderRadius: '10px',
                            height: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar
                                    alt="Total Reaches"
                                    src={demo}
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: '20px',
                                    }}
                                />

                                <Typography
                                    variant="subtitle"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: {
                                            md: '20px',
                                            sm: '16px',
                                            xs: '12px',
                                        },

                                        color: '#1C1F37',
                                    }}
                                >
                                    Demographic
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pb: 1,
                                }}
                            >
                                <Typography
                                    variant="subtitle"
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {
                                            md: '20px',
                                            sm: '16px',
                                            xs: '12px',
                                        },

                                        color: '#017EFA',
                                    }}
                                >
                                    See Detail
                                </Typography>
                                <KeyboardArrowRightIcon
                                    sx={{
                                        color: '#017EFA',

                                        fontWeight: 'bold',
                                    }}
                                />
                            </Box>
                        </Box>

                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <GenderNestedPieChart />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <AudienceAge />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={isSmallScreen ? 12 : 4}
                    sx={{
                        height: { md: '400px', sm: '100%', sx: '100%' },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',
                            p: 2,
                            borderRadius: '10px',
                            height: '100%',
                        }}
                    >
                        <TopChannels />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Demographic;
