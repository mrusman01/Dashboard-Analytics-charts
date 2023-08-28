import React from 'react';
import { Box, Divider, Typography, Card, Grid, Stack } from '@mui/material';
import icon from '../../assets/icon.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import speaker from '../../assets/speaker.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import firstevent from '../../assets/firstevent.png';
import post2icon from '../../assets/post2icon.png'
import post3icon from '../../assets/post3icon.png'
import post2 from '../../assets/post2.png'
import EventIcon from '@mui/icons-material/Event';
import post3 from '../../assets/post3.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Eventscheme = () => {
    return (
        <Box>
            <Card>
                <Box display="flex" alignItems="center" justifyContent="space-between" p={'10px'}>
                    <Box display="flex" alignItems="center" gap="10px">
                        <img src={icon}></img>
                        <Typography>Content Reach Summary</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#017EFA'}>
                        See Detail <NavigateNextIcon />
                    </Box>
                </Box>
                <Divider></Divider>
                <Grid container spacing={'30px'} justifyContent={'space-between'}>
                    <Grid item lg={4} >
                        <Typography pt="20px" fontSize={'18px'} color={'#1C1F37'} fontWeight={'bold'} pb="20px">Upcoming Event</Typography>
                        <Stack mt={2} spacing={'40px'}>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Box display={'flex'} alignItems={'center'}>
                              <EventIcon sx={{color:'#51CBFF'}}/>
                                New Store Product Campaign
                              </Box>
                              <Stack direction={'row'} spacing={'10px'}>
                                <Box sx={{background:'#017EFA',color:'white',padding:'3px',borderRadius:'3px'}}>
                                 M
                                </Box>
                                <MoreHorizIcon sx={{color:'#8E8E8E'}}/>
                              
                              </Stack>

                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Box display={'flex'} alignItems={'center'}>
                              <EventIcon sx={{color:'#51CBFF'}}/>
                              Post A Travel Poster
                              </Box>
                              <Stack direction={'row'} spacing={'10px'}>
                                <Box sx={{background:'#017EFA',color:'white',padding:'3px',borderRadius:'3px'}}>
                                 p
                                </Box>
                                <MoreHorizIcon sx={{color:'#8E8E8E'}}/>
                              
                              </Stack>

                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Box display={'flex'} alignItems={'center'}>
                              <EventIcon sx={{color:'#51CBFF'}}/>
                              Mars Travel Manual for Mark...
                              </Box>
                              <Stack direction={'row'} spacing={'10px'}>
                                <Box sx={{background:'#017EFA',color:'white',padding:'3px',borderRadius:'3px'}}>
                                 D
                                </Box>
                                <MoreHorizIcon sx={{color:'#8E8E8E'}}/>
                              
                              </Stack>

                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Box display={'flex'} alignItems={'center'}>
                              <EventIcon sx={{color:'#51CBFF'}}/>
                              Review with Compliance
                              </Box>
                              <Stack direction={'row'} spacing={'10px'}>
                                <Box sx={{background:'#017EFA',color:'white',padding:'3px',borderRadius:'3px'}}>
                                 M
                                </Box>
                                <MoreHorizIcon sx={{color:'#8E8E8E'}}/>
                              
                              </Stack>

                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                              <Box display={'flex'} alignItems={'center'}>
                              <EventIcon sx={{color:'#51CBFF'}}/>
                              Public Holiday
                              </Box>
                              <Stack direction={'row'} spacing={'10px'}>
                               
                                <MoreHorizIcon sx={{color:'#8E8E8E'}}/>
                              
                              </Stack>

                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item lg={8} >
                        <Box   sx={{ border: '1px solid #F5F6FA', borderRadius: '10px' ,width:'90%'}}>
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                             
                                padding={'10px'}
                            >
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    10 <br></br>
                                    <span style={{ color: 'black' }}>Fri</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    11<br></br>
                                    <span style={{ color: 'black' }}>Sat</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    12 <br></br>
                                    <span style={{ color: 'black' }}>Sun</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    13<br></br>
                                    <span style={{ color: 'black' }}>Mon</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                        background: '#FFFFFF',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: '1px solid #017EFA ',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            padding:'5px'
                                        }}
                                    >
                                        14<br></br>
                                        <span style={{ color: 'black' }} span>
                                            Tue
                                        </span>
                                    </Box>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    15 <br></br>
                                    <span style={{ color: 'black' }}>Wed</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    16<br></br>
                                    <span style={{ color: 'black' }}>Thur</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    17<br></br>
                                    <span style={{ color: 'black' }}>Fri</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    18 <br></br>
                                    <span style={{ color: 'black' }}>Sat</span>
                                </Box>
                                <Box
                                    style={{
                                        cursor: 'pointer',
                                        color: '#017EFA',
                                    }}
                                >
                                    19<br></br>
                                    <span style={{ color: 'black' }}>Sun</span>
                                </Box>
                            </Stack>

                            <Divider></Divider>


                            {/* -----------body-------------- */}

                            <Stack spacing={'10px'} pt="10px" pr={'20px'} >
                              <Box display="flex" pl={'70px'}>
                              <Box
                                    sx={{
                                        background: '#E6F3FF',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                        alignItems: 'center',
                                        borderRadius: '6px',
                                        border: '1px solid #017EFA',
                                        padding:'10px'
                                    }}
                                >
                                    <Box display={'flex'} alignItems={'center'} gap="10px">
                                        <img src={speaker} alt="speaker"></img>
                                        <Stack>
                                            <Typography>New Store Product Campaign</Typography>
                                            <Typography sx={{color:'#8E8E8E'}}>Marketing</Typography>
                                        </Stack>
                                    </Box>

                                    <Box display={'flex'} alignItems={'center'}>
                                        <img src={firstevent} alt="avat"></img>
                                        <MoreVertIcon sx={{color:'#8E8E8E'}}/>
                                    </Box>
                                </Box>
                              </Box>
                                <Divider></Divider>
                                {/* -----------------event2---------------- */}
                               <Box sx={{pl:'70px'}}>
                               <Box
                                    sx={{
                                        background: '#F3F0FF',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '45%',
                                        alignItems: 'center',
                                        borderRadius: '6px',
                                        border: '1px solid #7659FF',
                                        padding:'10px'
                                    }}
                                >
                                    <Box display={'flex'} alignItems={'center'} gap="10px">
                                        <img src={post2icon} alt="speaker"></img>
                                        <Stack>
                                            <Typography>Post A Travel Poster </Typography>
                                            <Typography sx={{color:'#8E8E8E'}}>Posting</Typography>
                                        </Stack>
                                    </Box>

                                    <Box display={'flex'} alignItems={'center'}>
                                        <img src={post2} alt="avat"></img>
                                        <MoreVertIcon sx={{color:'#8E8E8E'}} />
                                    </Box>
                                </Box>
                               </Box>

                                <Divider></Divider>

                                {/* ----------event3------------- */}
                             <Box display="flex" alignItems={'center'} justifyContent={'center'} >
                             <Box
                                    sx={{
                                        background: '#FFEAF6',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '45%',
                                        alignItems: 'center',
                                        borderRadius: '6px',
                                        border: '1px solid #FD269E',
                                        padding:'10px'
                                    }}
                                >
                                    <Box display={'flex'} alignItems={'center'} gap="10px">
                                        <img src={post3icon} alt="speaker"></img>
                                        <Stack>
                                            <Typography>Mars Travel Manual for...</Typography>
                                            <Typography color={'#8E8E8E'}>Drafting</Typography>
                                        </Stack>
                                    </Box>

                                    <Box display={'flex'} alignItems={'center'}>
                                        <img src={post3} alt="avat"></img>
                                        <MoreVertIcon sx={{color:'#8E8E8E'}} />
                                    </Box>
                                </Box>
                             </Box>

                                <Divider></Divider>
                                {/* ------------4-------- */}
                              <Box display={'flex'} justifyContent={'center'}>
                              <Box
                                    sx={{
                                        background: '#E6F3FF',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                        alignItems: 'center',
                                        borderRadius: '6px',
                                        border: '1px solid #017EFA',
                                        padding:'10px'
                                    }}
                                >
                                    <Box display={'flex'} alignItems={'center'} gap="10px">
                                        <img src={speaker} alt="speaker"></img>
                                        <Stack>
                                            <Typography>Review Marketing with Compliance</Typography>
                                            <Typography sx={{color:'#8E8E8E'}}
                                            >Marketing</Typography>
                                        </Stack>
                                    </Box>

                                    <Box display={'flex'} alignItems={'center'}>
                                        <img src={firstevent} alt="avat"></img>
                                        <MoreVertIcon  sx={{color:'#8E8E8E'}}/>
                                    </Box>
                                </Box>
                              </Box>

                                <Divider></Divider>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

export default Eventscheme;
