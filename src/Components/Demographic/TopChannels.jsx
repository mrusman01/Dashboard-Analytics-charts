import { Avatar, Box, Grid, Typography, styled } from '@mui/material';
import React, { Fragment } from 'react';
import topDemo from '../../assets/TopChannels.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import fb from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#51CBFF' : '#51CBFF',
    },
}));
const data = [
    { icon: fb, iconName: 'Facebook', num1: '124K', num2: '+12%', boxP: 40 },
    { icon: instagram, iconName: 'Instagram', num1: '124K', num2: '+12%', boxP: 20 },
    { icon: linkedin, iconName: 'LinkedIn', num1: '124K', num2: '+12%', boxP: 80 },
    { icon: youtube, iconName: 'YouTube', num1: '124K', num2: '+12%', boxP: 10 },
];

const TopChannels = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                        <Avatar
                            alt="Total Reaches"
                            src={topDemo}
                            sx={{
                                width: 20,
                                height: 20,
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                    <Box>
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
                            TopChannels
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
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

            <Box
                sx={{
                    display: 'flex',
                    gap: 4,
                    py: 2,
                }}
            >
                <Typography sx={{ color: '#939393' }}>Source</Typography>
                <Typography sx={{ color: '#939393' }}>Visit</Typography>
            </Box>

            <Box>
                {data.map(({ icon, iconName, num1, num2, boxP }, index) => (
                    <Box
                        key={index}
                        sx={{
                            pb: 2,
                        }}
                    >
                        <Grid
                            container
                            alignItems={'center'}
                            sx={{
                                backgroundColor: '#FAFAFA',
                                p: 1.5,
                            }}
                        >
                            <Grid item xs={5}>
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    <Box>
                                        <Avatar
                                            alt="Total Reaches"
                                            src={icon}
                                            sx={{
                                                width: { md: 25, sm: 25, xs: 20 },
                                                height: { md: 25, sm: 25, xs: 20 },
                                                borderRadius: '20px',
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: { md: '12px', sm: '12px', xs: '12px' },
                                        }}
                                    >
                                        {iconName}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: { md: '12px', sm: '12px', xs: '12px' },
                                        }}
                                    >
                                        {num1}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#30D987',
                                            fontSize: { md: '12px', sm: '12px', xs: '12px' },
                                        }}
                                    >
                                        {num2}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <BorderLinearProgress variant="determinate" value={boxP} />
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Fragment>
    );
};

export default TopChannels;
