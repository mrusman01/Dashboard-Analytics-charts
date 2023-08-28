import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    LabelList,
    Legend,
} from 'recharts';

const data = [
    {
        month: 'Apr 21',
        Male: 70,
        Female: 48,

        vu: 200,
    },
    {
        month: 'May 21',
        Male: 75,
        Female: 110,

        vu: 150,
    },
    {
        month: 'jun 21',
        Male: 40,
        Female: 105,

        vu: 100,
    },
    {
        month: 'Jul 21',
        Male: 110,
        Female: 48,

        vu: 50,
    },
    {
        month: 'Aug 21',
        Male: 80,
        Female: 52,
        vu: 0,
    },
    {
        month: 'Sep 21',
        Male: 90,
        Female: 140,
    },
];

const Audience = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ dx: 2, dy: 10 }} />
                <YAxis
                    dataKey="vu"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => (value === 0 ? '0' : `${value}K`)}
                    tick={{ dx: -20, dy: -2 }}
                />

                <CartesianGrid horizontal={false} />

                <Tooltip
                    contentStyle={{
                        fontSize: '14px',
                        borderRadius: '8px',
                        height: '122px',
                        width: '150px',
                        color: 'white',
                        background: '#081A51',
                    }}
                    itemStyle={{ fontWeight: 600 }}
                />

                <Bar dataKey="Male" fill="#017EFA">
                    <LabelList dataKey="Male" position="top" formatter={(value) => `${value} K`} />
                </Bar>

                <Bar dataKey="Female" fill="#51CBFF">
                    <LabelList
                        dataKey="Female"
                        position="top"
                        formatter={(value) => `${value} K`}
                    />
                </Bar>

                <Legend
                    verticalAlign="top"
                    align="left"
                    formatter={(value, entry) => {
                        const dataKey = entry.dataKey;
                        const formattedValue = `${entry.value}K`;
                        return `${dataKey} (${formattedValue})`;
                    }}
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{
                        paddingBottom: '2rem',
                    }}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Audience;
