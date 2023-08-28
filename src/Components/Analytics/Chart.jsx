import React from 'react';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
    // Legend,
} from 'recharts';

const data = [
    {
        month: 'Jan',
        Reach: 70,
        PaidReach: 48,
        OrganicReach: 20,
        vu: 200,
    },
    {
        month: 'Feb',
        Reach: 75,
        PaidReach: 110,
        OrganicReach: 45,
        vu: 150,
    },
    {
        month: 'Mar',
        Reach: 40,
        PaidReach: 105,
        OrganicReach: 40,
        vu: 100,
    },
    {
        month: 'Apr',
        Reach: 110,
        PaidReach: 48,
        OrganicReach: 55,
        vu: 50,
    },
    {
        month: 'May',
        Reach: 80,
        PaidReach: 52,
        OrganicReach: 75,
        vu: 0,
    },
    {
        month: 'Jun',
        Reach: 90,
        PaidReach: 140,
        OrganicReach: 55,
    },
    {
        month: 'Jul',
        Reach: 150,
        PaidReach: 130,
        OrganicReach: 50,
    },
    {
        month: 'Aug',
        Reach: 125,
        PaidReach: 120,
        OrganicReach: 45,
    },
    {
        month: 'Sep',
        Reach: 100,
        PaidReach: 95,
        OrganicReach: 48,
    },
    {
        month: 'Oct',
        Reach: 130,
        PaidReach: 140,
        OrganicReach: 60,
    },
    {
        month: 'Nov',
        Reach: 140,
        PaidReach: 160,
        OrganicReach: 52,
    },
    {
        month: 'Dec',
        Reach: 135,
        PaidReach: 11,
        OrganicReach: 70,
    },
];

export default function Chart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
                <defs>
                    <linearGradient id="colorSale" x1="0" y1="0" x2="0" y2="1"></linearGradient>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1"></linearGradient>
                    <linearGradient
                        id="ColorOrganicReach"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    ></linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ dx: 2, dy: 10 }} />
                <YAxis
                    dataKey="vu"
                    axisLine={false}
                    tickLine={false}
                    // tickFormatter={(value) => `${value}K`}
                    tickFormatter={(value) => (value === 0 ? '0' : `${value}K`)}
                    tick={{ dx: -20, dy: -2 }}
                />

                <CartesianGrid vertical={false} strokeDasharray="3 3" />

                <Tooltip
                    contentStyle={{
                        fontSize: '14px',
                        borderRadius: '8px',
                        height: '122px',
                        width: '150px',
                        color: 'white',
                        background: '#081A51',
                    }}
                    itemStyle={{ fontWeight: '600' }}
                />

                <Area
                    type="monotone"
                    dataKey="Reach"
                    stroke="#30D987"
                    fillOpacity={0.5}
                    fill="url(#colorReach)"
                    dot={{ fill: '#30D987' }}
                />
                <Area
                    type="monotone"
                    dataKey="PaidReach"
                    stroke="#017EFA"
                    fillOpacity={0.4}
                    fill="url(#colorSale)"
                    dot={{ fill: '#017EFA' }}
                />
                <Area
                    type="monotone"
                    dataKey="OrganicReach"
                    stroke="#FD1F9B"
                    fillOpacity={0.4}
                    fill="url(#ColorOrganicReach)"
                    dot={{ fill: '#FD1F9B' }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
