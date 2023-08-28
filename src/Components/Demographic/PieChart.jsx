import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Gender',
        value: 1,
        subcategories: [
            { name: 'Female', value: 38, color: '#51CBFF' },
            { name: 'Other', value: 12, color: '#30DA88' },
            { name: 'Male', value: 68, color: '#017EFA' },
        ],
    },
];

const GenderNestedPieChart = () => {
    return (
        <ResponsiveContainer width="100%" height={330}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={10}
                    outerRadius={10}
                    fill="#8884d8"
                    labelLine={false}
                    paddingAngle={10}
                    label={({ cx, cy }) => (
                        <text
                            x={cx}
                            y={cy}
                            fill="black"
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={'18px'}
                            fontWeight={700}
                        >
                            Gender
                        </text>
                    )}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#8884d8" />
                    ))}
                </Pie>

                {data.map((entry, index) => (
                    <Pie
                        key={`subpie-${index}`}
                        data={entry.subcategories}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={1}
                        startAngle={90}
                        endAngle={-270}
                        labelLine={false}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                            return (
                                <g>
                                    <defs>
                                        <filter
                                            id="shadow"
                                            x="-20%"
                                            y="-20%"
                                            width="140%"
                                            height="140%"
                                        >
                                            <feDropShadow
                                                dx="2"
                                                dy="2"
                                                stdDeviation="2"
                                                floodColor="gray"
                                            />
                                        </filter>
                                    </defs>
                                    <rect
                                        x={x - 22}
                                        y={y - 22}
                                        width="45"
                                        height="45"
                                        rx="50"
                                        fill="white"
                                        filter="url(#shadow)"
                                    />
                                    <text
                                        x={x}
                                        y={y}
                                        fill="black"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fontSize="18"
                                        fontWeight={700}
                                    >
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                </g>
                            );
                        }}
                    >
                        {entry.subcategories.map((subEntry, subIndex) => (
                            <Cell key={`cell-${subIndex}`} fill={subEntry.color} />
                        ))}
                    </Pie>
                ))}

                <Legend iconType="circle" iconSize={15} />

                <Tooltip
                    contentStyle={{
                        fontSize: '14px',
                        borderRadius: '5%',
                    }}
                    formatter={(value) => `${((value * 100) / 100).toFixed()}%`}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default GenderNestedPieChart;
