import { Box, Divider, List, ListItem, Typography, Stack, Container } from '@mui/material';
import React from 'react';

const myData = [
    { name: '< 15 years old', value: '21K', btnValue: '27%' },
    { name: '20 - 35 years old', value: '64K', btnValue: '40%' },
    { name: '40 - 50 years old', value: '18K', btnValue: '16%' },
    { name: '> 50 years old', value: '5K', btnValue: '8%' },
];

const AudienceAge = () => {
    const colorByIndex = ['#FD1F9B', '#017EFA', '#30D987', '#6342FF'];

    return (
        <>
            <Container>
                <Stack justifyContent="center" alignItems="center">
                    <Box
                        sx={{
                            backgroundColor: '#FAFAFA',

                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="subtitle"
                            sx={{
                                fontWeight: 500,
                                fontSize: {
                                    md: '24px',
                                    sm: '20px',
                                    xs: '16px',
                                },

                                color: 'Black',
                            }}
                        >
                            Audience Age
                        </Typography>

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
                        <Box>
                            <List>
                                {myData.map(({ name, value, btnValue }, index) => (
                                    <ListItem
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '10px',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: colorByIndex[index],
                                                display: 'inline-block',
                                            }}
                                        ></Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '12px',
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '12px',
                                            }}
                                        >
                                            {value}
                                        </Typography>
                                        <Typography
                                            style={{
                                                backgroundColor: '#E6F2FE',
                                                color: colorByIndex[index],
                                                borderRadius: '50%',
                                                padding: '5px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {btnValue}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default AudienceAge;
