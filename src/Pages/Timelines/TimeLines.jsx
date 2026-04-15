import React, { useContext, useState } from 'react'; // 1. Import useState
import { toast } from 'react-toastify';
import { TimelineContext } from '../../Context/TimeLineContext';
import { Phone, MessageSquare, Video } from 'lucide-react';

const TimeLines = () => {
    const { timelines } = useContext(TimelineContext);

    const [filter, setFilter] = useState('All');

    const getIcon = (type) => {
        if (type === 'Call') return <div className='w-9 h-9 rounded-full bg-green-100 flex items-center justify-center'><Phone size={16} className='text-green-700' /></div>;
        if (type === 'Text') return <div className='w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center'><MessageSquare size={16} className='text-gray-500' /></div>;
        if (type === 'Video') return <div className='w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center'><Video size={16} className='text-blue-500' /></div>;
    };

    const filteredTimelines = filter === 'All'
        ? timelines
        : timelines.filter(item => item.interactionType === filter);

    const handleFilterClick = (item) => {
        toast.success(`Viewing ${item.interactionType} details with ${item.name}`);
    };

    return (
        <div className='max-w-3xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Timeline</h1>

            <div className="flex gap-2 mb-6 justify-center">
                {['All', 'Call', 'Text', 'Video'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-1 rounded-full text-sm border transition ${filter === type
                            ? 'bg-[#1B4F3D] text-white border-[#1B4F3D]'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {filteredTimelines.length === 0 && (
                <p className='text-gray-400 text-center mt-10'>No interactions found for "{filter}".</p>
            )}

            <div className='flex flex-col gap-3'>
                {filteredTimelines.map((item, ind) => (
                    <div
                        key={ind}
                        onClick={() => handleFilterClick(item)}
                        className='flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4 bg-white hover:shadow-sm transition cursor-pointer'
                    >
                        <div className='flex items-center gap-4'>
                            {getIcon(item.interactionType)}
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>
                                    {item.interactionType} <span className='font-normal text-gray-500'>with {item.name}</span>
                                </p>
                                <p className='text-xs text-gray-400'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLines;