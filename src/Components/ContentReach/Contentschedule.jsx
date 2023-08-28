import React, { useState } from 'react';
import {
  Box,
  Divider,
  Typography,
  Card,
  Table,
  Grid,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import icon from '../../assets/icon.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Contentschedule = () => {
  const [selectedDate, setSelectedDate] = useState('14');

  const events = [
    { date: '14', title: 'New Store Product Campaign' },
    { date: '14', title: 'Post a Travel Poster' },
    { date: '14', title: 'Mars Travel Manual for Mark' },
    { date: '14', title: 'Review with Compliance' }, 
    {date:'14',title:'Public Holiday'}
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <Box>
    
        <Card>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={'10px'}
          >
            <Box display="flex" alignItems="center" gap="10px">
             <img src={icon}></img>
              <Typography>Content Reach Summary</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} color={'#017EFA'}>See Detail <NavigateNextIcon/></Box>
          </Box>
          <Divider></Divider>
          <Grid container padding={'10px'}>
            <Grid item lg={3}>
              <Typography>Upcoming Event</Typography>
              <Box mt={2}>
                {events.map((event, index) => (
                  <div key={index} style={{ marginBottom: '8px', cursor: 'pointer' }}>
                    <Typography
                      onClick={() => handleDateClick(event.date)}
                      sx={{
                        fontWeight: selectedDate === event.date ? 'bold' : 'normal',
                      }}
                    >
                      {event.title}
                    </Typography>
                  </div>
                ))}
              </Box>
            </Grid>
            <Grid item lg={9}>
              <Table sx={{border:'1px solid #F5F6FA',borderRadius:'2px'}}>
                <TableHead>
                  <TableRow>
                    <TableCell  onClick={() => handleDateClick}
                      style={{
                        cursor: 'pointer',
                        
                      }}>10 <span>Fri</span></TableCell>
                    <TableCell>11 <span>Sat</span></TableCell>
                    <TableCell>12 <span>Sun</span></TableCell>
                    <TableCell>13 <span>Mon</span></TableCell>
                    <TableCell
                      onClick={() => handleDateClick('14')}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: selectedDate === '14' ? '#f0f0f0' : 'white',
                      }}
                    >
                      14 <span>Tue</span>
                    </TableCell>
                    <TableCell>15 <span>Wed</span></TableCell>
                    <TableCell>16 <span>Thur</span></TableCell>
                    <TableCell>17 <span>Fri</span></TableCell>
                    <TableCell>18 <span>Sat</span></TableCell>
                    <TableCell>19 <span>Sun</span></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredEvents.length > 0 ? (
                    <TableRow sx={{borderCollapse:'collapse'}}>
                      <TableCell colSpan="5">
                        {filteredEvents.map((event, index) => (
                          <div key={index} style={{ marginBottom: '8px' }}>
                            {event.title}
                          </div>
                        ))}
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Card>
 
    </Box>
  );
};

export default Contentschedule;
