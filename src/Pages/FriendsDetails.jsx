import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useFriends from '../hooks/useFriends';
import { Phone, MessageSquare, Video, Archive, Trash2, Clock } from 'lucide-react';
import { HashLoader } from 'react-spinners';
import { TimelineContext } from '../Context/TimeLineContext';

const statusStyle = (status) => {
    if (status === 'on-track') return 'bg-[#2d4a3e] text-white';
    if (status === 'almost_due') return 'bg-orange-400 text-white';
    if (status === 'overdue') return 'bg-red-500 text-white';
};

const statusLabel = (status) => {
    if (status === 'on-track') return 'On-Track';
    if (status === 'almost_due') return 'Almost Due';
    if (status === 'overdue') return 'Overdue';
};

const FriendsDetails = () => {
    const { id } = useParams();
    const { friends, loading } = useFriends();
    const expectedfriend = friends.find(f => f.id == id);

    const { timelines, setTimelines } = useContext(TimelineContext);

    if (loading) return <div className='py-30 flex justify-center items-center'><HashLoader color='#244D3F' /> </div>;
    if (!expectedfriend) return <p className='text-center font-bold text-4xl mt-10'>Friend not found.</p>;

    const handleItems = (type) => {
        console.log('Logging interaction:', type);
        
        setTimelines([...timelines, { ...expectedfriend, interactionType: type, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }]);
        
        toast.success(`${type} interaction logged successfully`);
    };

    return (
        <div className='bg-gray-100 flex items-center justify-center p-8'>
            <div className='bg-white border border-gray-300 rounded-xl flex w-full max-w-6xl'>

                <div className='w-56 border-r  border-gray-300 p-6 flex flex-col items-center gap-2'>
                    <img src={expectedfriend.picture} alt={expectedfriend.name} className='w-20 h-20 rounded-full object-cover' />
                    <h2 className='font-bold text-gray-800'>{expectedfriend.name}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyle(expectedfriend.status)}`}>{statusLabel(expectedfriend.status)}</span>
                    <div className='flex flex-wrap justify-center gap-1'>
                        {expectedfriend.tags.map(tag => (
                            <span key={tag} className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full capitalize'>{tag}</span>
                        ))}
                    </div>
                    <p className='text-gray-400 text-xs italic text-center'>"{expectedfriend.bio}"</p>

                    <div className='w-full mt-3 flex flex-col'>
                        <button className='btn btn-sm btn-ghost border-gray-200  justify-start gap-2 m-2 text-gray-500'><Clock size={14} /> Snooze 2 Weeks</button>
                        <button className='btn btn-sm btn-ghost border-gray-200  justify-start gap-2 m-2 text-gray-500'><Archive size={14} /> Archive</button>
                        <button className='btn btn-sm btn-ghost border-gray-200 justify-start gap-2 m-2 text-red-400'><Trash2 size={14} /> Delete</button>
                    </div>
                </div>

                <div className='flex-1 p-6 flex flex-col gap-4'>

                    <div className='grid grid-cols-3 gap-3'>
                        {[
                            { label: 'Days Since Contact', value: expectedfriend.days_since_contact },
                            { label: 'Goal (Days)', value: expectedfriend.goal_days },
                            { label: 'Next Due', value: expectedfriend.next_due_date },
                        ].map((stat, i) => (
                            <div key={i} className='border border-gray-200 rounded-lg p-3 text-center'>
                                <p className='text-2xl font-bold text-gray-800'>{stat.value}</p>
                                <p className='text-gray-400 text-xs mt-1'>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className='border border-gray-200 rounded-lg p-4'>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold text-gray-700'>Relationship Goal</h3>
                            <button className='text-gray-400 text-sm'>Edit</button>
                        </div>
                        <p className='text-gray-500 text-sm mt-1'>Connect every <span className='font-bold text-gray-800'>{expectedfriend.goal_days} days</span></p>
                    </div>


                    {/* Quick Check-in-btns */}
                    <div className='border border-gray-200 rounded-lg p-4'>
                        <h3 className='font-semibold text-gray-700 mb-3'>Quick Check-In</h3>
                        <div className='grid grid-cols-3 gap-3'>

                            <button onClick={() => handleItems('Call')} className='btn btn-sm btn-ghost border border-gray-200 flex flex-col h-14 gap-1'>
                                <Phone size={18} />
                                <span className='text-xs'>Call</span>
                            </button>

                            <button onClick={() => handleItems('Text')} className='btn btn-sm btn-ghost border border-gray-200 flex flex-col h-14 gap-1'>
                                <MessageSquare size={18} />
                                <span className='text-xs'>Text</span>
                            </button>

                            <button onClick={() => handleItems('Video')} className='btn btn-sm btn-ghost border border-gray-200 flex flex-col h-14 gap-1'>
                                <Video size={18} />
                                <span className='text-xs'>Video</span>
                            </button>

                        </div>
                    </div>

                    <div className='border border-gray-200 rounded-lg p-4'>
                        <div className='flex justify-between mb-3'>
                            <h3 className='font-semibold text-gray-700'>Recent Interactions</h3>
                            <button className='text-gray-400 text-sm'>↺ Full History</button>
                        </div>
                        {[
                            { type: 'Text', note: 'Asked for career advice', date: 'Jan 28, 2026' },
                            { type: 'Meetup', note: 'Industry conference meetup', date: 'Jan 28, 2026' },
                            { type: 'Video', note: 'Catch up call', date: 'Jan 20, 2026' },
                        ].map((item, i) => (
                            <div key={i} className='flex justify-between items-center py-2 border-b border-gray-100 last:border-0'>
                                <div>
                                    <p className='text-sm font-semibold text-gray-700'>{item.type}</p>
                                    <p className='text-xs text-gray-400'>{item.note}</p>
                                </div>
                                <p className='text-xs text-gray-400'>{item.date}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;