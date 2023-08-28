import {
    Assessment,
    Inbox,
    AccountBox,
    CalendarMonth,
    Search,
    Timeline,
    Folder,
    Settings,
} from '@mui/icons-material';

import fb from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';

export const SideBarArray = [
    { name: 'DashBoard', icons: <Assessment />, link: '/' },
    { name: 'Inbox', icons: <Inbox />, link: '/#' },
    { name: 'Accounts', icons: <AccountBox />, link: '/#' },
    { name: 'Schedule Post', icons: <CalendarMonth />, link: '/#' },
    { name: 'Communities', icons: <Search />, link: '/communities' },
    { name: 'Analytics', icons: <Timeline />, link: '/analytics' },
    { name: 'File & Folders', icons: <Folder />, link: '/#' },
    { name: 'Settings', icons: <Settings />, link: '/#' },
];

export const ScheduleContent = [
    {
        date: 18,
        text: 'Write 5 microblog articles on Instagram',
        percent: 72,
    },
    {
        date: 24,
        text: 'Publish 20 post on Dribbbles',
        percent: 14,
    },
    {
        date: 18,
        text: 'Drafting Material for Travel Campaign',
        percent: 43,
    },
];

export const data = [
    { icon: fb, iconName: 'Facebook', num1: '124K', num2: '+12%', boxP: 40 },
    { icon: instagram, iconName: 'Instagram', num1: '124K', num2: '+12%', boxP: 20 },
    { icon: linkedin, iconName: 'LinkedIn', num1: '124K', num2: '+12%', boxP: 80 },
    { icon: youtube, iconName: 'YouTube', num1: '124K', num2: '+12%', boxP: 10 },
];
