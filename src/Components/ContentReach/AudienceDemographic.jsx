import { Box, Divider, List, ListItem, Typography, Card, Stack, Button } from '@mui/material';
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import icon from '../../assets/icon.png';
import engae from '../../assets/engae.png'
import TextsmsIcon from '@mui/icons-material/Textsms';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';

const myData = [
    { name: '< 15 years old', value: '21K', btnValue: '27%' },
    { name: '20 - 35 years old', value: '64K', btnValue: '40%' },
    { name: '40 - 50 years old', value: '18K', btnValue: '16%' },
    { name: '> 50 years old', value: '5K', btnValue: '8%' },
];

const AudienceDemographic = () => {
    const colorByIndex = ['#017EFA', '#51CBFF', '#B6E9FF'];

    const totalAudience = myData.reduce(
        (total, demographic) => total + parseInt(demographic.value),
        0
    );
    
    const malePercentage = 0.68;
    const femalePercentage = 0.38;
    const otherPercentage = 0.12;
    
    const maleValue = Math.round(malePercentage * totalAudience);
    const femaleValue = Math.round(femalePercentage * totalAudience);
    const otherValue = Math.round(otherPercentage * totalAudience);
    
    const pieOption = {
        title: {
            text: `${totalAudience.toLocaleString()}K`,
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 14,
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                const percentage =
                    params.name === 'Male'
                        ? `${(malePercentage * 100).toFixed(1)}%`
                        : params.name === 'Female'
                        ? `${(femalePercentage * 100).toFixed(1)}%`
                        : `${(otherPercentage * 100).toFixed(1)}%`;
                return `${params.name}: (${percentage})`;
            },
        },
        series: [
            {
                type: 'pie',
                radius: ['35%', '50%'],
                center: ['50%', '50%'],
                startAngle: -90,
                label: {
                    show: false,
                },
                data: [
                    { value: maleValue, name: 'Male', itemStyle: { color: colorByIndex[0] } },
                    { value: femaleValue, name: 'Female', itemStyle: { color: colorByIndex[1] } },
                    { value: otherValue, name: 'Other', itemStyle: { color: colorByIndex[2] } },
                ],
                emphasis: {
                    scale: true,
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                },
            },
        ],
    };
    
    return (
        <>
           
               <Stack gap={'40px'}>
               <Card sx={{ padding: 2 }}>
               <Box>
                    <Box display="flex" alignItems="center" justifyContent="center" gap="10px">
                        <img src={icon} alt="icon"></img>
                        <Typography>Audience Demographic</Typography>
                    </Box>
                    <Divider sx={{ pt: '10px' }}></Divider>
                    <Stack direction="row" justifyContent="space-between" pt={2}>
                        <Box>
                            <Typography>Order Time</Typography>
                            <span>From 1-6 Dec 2021</span>
                        </Box>
                        <Button>View Report</Button>
                    </Stack>
                    <ReactEcharts option={pieOption} style={{ height: '350px', width: '100%' }} />
                    <Box display="flex" alignItems="center" gap="10px">
                        <Typography
                            sx={{
                                background: '#FAFAFA',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '3px',
                            }}
                        >
                            <Typography
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                    background: '#017EFA',
                                }}
                            ></Typography>
                            Male (68%){' '}
                        </Typography>
                        <Typography
                            sx={{
                                background: '#FAFAFA',
                                display: 'flex',
                                padding: '3px',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                    background: '#51CBFF',
                                }}
                            ></Typography>
                            Female (38%){' '}
                        </Typography>
                        <Typography
                            sx={{
                                background: '#FAFAFA',
                                display: 'flex',
                                padding: '3px',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                    background: '#B6E9FF',
                                }}
                            ></Typography>
                            Other (12%){' '}
                        </Typography>
                    </Box>
                </Box>
      <Divider sx={{pt:'10px'}}></Divider>


                {/* -----------audience-------------------- */}
                <Box
                    sx={{
                        // border: '1px solid red',
                        p: 2,
                        // height: { md: '60vh' },
                        display: 'flex',
                        flexDirection: 'column',

                        justifyContent: 'center',
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
                            // color: 'text.primary',
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
                                    <Typography variant="body1">{name}</Typography>
                                    <Typography variant="body1">{value}</Typography>
                                    <Typography
                                        style={{
                                            backgroundColor: '#E6F2FE',
                                            color: colorByIndex[index],
                                            borderRadius: '50%',
                                            padding: '5px',
                                        }}
                                    >
                                        {btnValue}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
              
                {/* ------------enagegaudience---------------- */}
                </Card>
                <Card  sx={{padding:'10px'}}>
                    <Box display={'flex'} gap={'10px'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                       <Stack direction={'row'} gap={'10px'}>
                       <img src={icon} alt='icon'></img>
                        <Typography fontWeight={'bold'} fontSize={'20px'}>Most Engangge Audience</Typography>
                       </Stack>
                        <Divider></Divider>
                        <Box sx={{background:'#FAFAFA',display:'flex',width:'80%',gap:'10px',padding:'10px'}}>
                         <img src={engae}></img>
                         <Stack >
                            <Typography>Margareth Zend</Typography>
                            <Stack direction={'row'} gap={'10px'}>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ThumbUpIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>300like</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <TextsmsIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>120comment</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ReplyIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>83share</Typography>
                             </Box>
                            </Stack>
                         </Stack>
                        </Box>
                        {/* ------------ */}
                        <Box sx={{background:'#FAFAFA',display:'flex',width:'80%',gap:'10px',padding:'10px'}}>
                         <img src={engae}></img>
                         <Stack >
                            <Typography>Margareth Zend</Typography>
                            <Stack direction={'row'} gap={'10px'}>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ThumbUpIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>300like</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <TextsmsIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>120comment</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ReplyIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>83share</Typography>
                             </Box>
                            </Stack>
                         </Stack>
                        </Box>
                        {/* ----------- */}
                        <Box sx={{background:'#FAFAFA',display:'flex',width:'80%',gap:'10px',padding:'10px'}}>
                         <img src={engae}></img>
                         <Stack >
                            <Typography>Margareth Zend</Typography>
                            <Stack direction={'row'} gap={'10px'}>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ThumbUpIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>300like</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <TextsmsIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>120comment</Typography>
                             </Box>
                             <Box display='flex' alignItems={'center'} gap={'5px'}>
                              <ReplyIcon sx={{color:'#51CBFF',width:'12px'}}/>
                              <Typography fontSize={'12px'}>83share</Typography>
                             </Box>
                            </Stack>
                         </Stack>
                        </Box>
                    </Box>
                    <Divider></Divider>
                </Card>
               </Stack>
         
        </>
    );
};

export default AudienceDemographic;
