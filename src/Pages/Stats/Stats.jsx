import React, { useContext } from 'react';
import { Pie, PieChart, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { TimelineContext } from '../../Context/TimeLineContext';

const Stats = () => {
    const { timelines } = useContext(TimelineContext);

    // 1. Filter and count the specific interaction types dynamically
    // We assume each timeline item has an 'interactionType' property
    const textCount = timelines.filter(item => item.interactionType === 'Text').length;
    const callCount = timelines.filter(item => item.interactionType === 'Call').length;
    const videoCount = timelines.filter(item => item.interactionType === 'Video').length;

    // 2. Assign the dynamic counts to the data array
    const data = [
        { name: 'Text', value: textCount, fill: '#8B5CF6' },
        { name: 'Call', value: callCount, fill: '#1B4F3D' },
        { name: 'Video', value: videoCount, fill: '#4ADE80' },
    ];

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col items-center p-4">

            {/* Responsive Typography */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 text-center">Friendship Analytics</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-6">By Interaction Type</p>

            {/* Responsive Height */}
            <div className="w-full h-[300px] md:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="60%"
                            outerRadius="80%"
                            paddingAngle={2}
                            cornerRadius={5}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            wrapperStyle={{ fontSize: '12px', fontWeight: '500' }}
                        />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Optional: Show total interactions for clarity */}
            <p className="text-xs text-gray-400 mt-4">Total Logged: {timelines.length}</p>
        </div>
    );
};

export default Stats;