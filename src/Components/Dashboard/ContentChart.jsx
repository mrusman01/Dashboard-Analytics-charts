import React from 'react';
import { Avatar, Box, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import { KeyboardArrowRight, ArrowUpward } from '@mui/icons-material';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { ScheduleContent, data } from '../../utils/Constant';
import Audience from './Audience';
import ReachSummaryChart from './ReachSummaryChart';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#51CBFF' : '#51CBFF',
    },
}));

const ContentChart = () => {
    return (
        <Box>
            <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12} md={4.8}>
                    <Stack
                        sx={{
                            py: 2,

                            borderRadius: '8px',
                            background: '#FFF',
                            boxShadow: '0px 5px 10px 0px #F1F2FA',
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            py={1}
                            px={3}
                        >
                            <Typography variant="boldText">Schedule Content</Typography>
                            <Typography
                                variant="h2"
                                color="#017EFA"
                                display="flex"
                                alignItems="flex-end"
                                gap={0.5}
                            >
                                See Detail
                                <KeyboardArrowRight sx={{ fontSize: '1rem' }} />
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        {ScheduleContent.map((item, index) => {
                            return (
                                <Stack px={3} key={index}>
                                    <Box display="flex" alignItems="center">
                                        <Stack
                                            sx={{
                                                py: 1.2,
                                                px: 2,
                                                textAlign: 'center',
                                                borderRadius: '4px',
                                                border: '1px solid #DADADA',
                                                my: 1,
                                                mr: 1,
                                            }}
                                        >
                                            <Typography variant="smallText">Jul</Typography>
                                            <Typography
                                                variant="test1"
                                                fontWeight={600}
                                                color="#000"
                                            >
                                                {item.date}
                                            </Typography>
                                        </Stack>
                                        <Box>
                                            <Typography variant="h4">{item.text}</Typography>
                                            <Typography
                                                variant="smallText"
                                                sx={{ color: '#8D8F9B' }}
                                            >
                                                Office / Marketing
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center" gap={1.7}>
                                        <Box sx={{ width: '85px' }}>
                                            <BorderLinearProgress
                                                variant="determinate"
                                                value={item.percent}
                                            />
                                        </Box>
                                        <Typography variant="smallText">
                                            {item.percent}% Complete
                                        </Typography>
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                    <ReachSummaryChart />
                </Grid>
                <Grid item xs={12} md={4.8}>
                    <Stack
                        sx={{
                            py: 2,

                            borderRadius: '8px',
                            background: '#FFF',
                            boxShadow: '0px 5px 10px 0px #F1F2FA',
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            py={1}
                            px={3}
                        >
                            <Typography variant="boldText">Top Channels</Typography>
                            <Typography
                                variant="h2"
                                color="#017EFA"
                                display="flex"
                                alignItems="flex-end"
                                gap={0.5}
                            >
                                See Detail
                                <KeyboardArrowRight sx={{ fontSize: '1rem' }} />
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Stack px={3}>
                            <Box display="flex" alignItems="flex-end" gap="3px">
                                <Typography variant="h1" sx={{ fontSize: '28px' }}>
                                    120K
                                </Typography>
                                <ArrowUpward
                                    sx={{ color: '#30D988', fontSize: '0.8rem', mb: 0.5 }}
                                />
                                <Typography
                                    variant="smallText"
                                    sx={{ color: '#30D988', fontSize: '10px', mb: 0.3 }}
                                >
                                    12 vist
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    my: 1.5,
                                    borderRadius: '20px',
                                    gap: 0.11,
                                }}
                            >
                                <Divider
                                    orientation="horizontal"
                                    sx={{
                                        backgroundColor: '#FD1F9B',
                                        flex: '27',
                                        height: '10px',
                                        borderRadius: '10px 0 0 10px',
                                    }}
                                />
                                <Divider
                                    orientation="horizontal"
                                    sx={{
                                        backgroundColor: '#017EFA',
                                        flex: '40',
                                        height: '10px',
                                    }}
                                />
                                <Divider
                                    orientation="horizontal"
                                    sx={{
                                        backgroundColor: '#30D987',
                                        flex: '16',
                                        height: '10px',
                                    }}
                                />
                                <Divider
                                    orientation="horizontal"
                                    sx={{
                                        backgroundColor: '#6342FF',
                                        flex: '8',
                                        height: '10px',
                                        borderRadius: '0 10px 10px 0',
                                    }}
                                />
                            </Box>

                            {/*  */}

                            {data.map(({ icon, iconName, num1, num2 }, index) => (
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
                                                            width: {
                                                                md: 25,
                                                                sm: 25,
                                                                xs: 20,
                                                            },
                                                            height: {
                                                                md: 25,
                                                                sm: 25,
                                                                xs: 20,
                                                            },
                                                            borderRadius: '20px',
                                                        }}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: {
                                                            md: '12px',
                                                            sm: '12px',
                                                            xs: '12px',
                                                        },
                                                    }}
                                                >
                                                    {iconName}
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        fontWeight: 400,
                                                    }}
                                                >
                                                    {num1} Vistor
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography
                                                variant="h2"
                                                sx={{
                                                    textAlign: 'center',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {num2}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Audience />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContentChart;
