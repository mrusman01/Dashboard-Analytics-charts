import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import demo from '../../assets/Demographic.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DemoHeader = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    p: 2,
                    mb: 2,
                    borderRadius: '10px',
                    height: '100%',
                    width: '100%',
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
                                // color: 'text.primary',
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
            </Box>
        </>
    );
};

export default DemoHeader;
