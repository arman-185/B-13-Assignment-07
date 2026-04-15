import { ClimbingBoxLoader, HashLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';

const statusStyle = (status) => {
    if (status === 'on-track') return 'bg-[#2d4a3e] text-white';
    if (status === 'almost_due') return 'bg-orange-400 text-white';
    if (status === 'overdue') return 'bg-red-500 text-white';
    return 'bg-gray-200 text-gray-600';
};

const statusLabel = (status) => {
    if (status === 'on-track') return 'On-Track';
    if (status === 'almost_due') return 'Almost Due';
    if (status === 'overdue') return 'Overdue';
    return status;
};

const YourFriends = () => {


    const {friends, loading} = useFriends();
    console.log(loading, "loading")

    return (
        <div className='px-6 py-8 max-w-5xl mx-auto'>
            <h2 className='font-bold text-2xl text-gray-800 mb-6'>Your Friends</h2>

            {loading ? <div className='py-30 flex justify-center items-center'><HashLoader color='#244D3F' /> </div>
            : (<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {friends.map((friend, ind) => (
                    <div key={ind} className='bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center gap-2'>
                        <img src={friend.picture} alt={friend.name} className='w-20 h-20 rounded-full object-cover' />
                        <h3 className='font-bold text-gray-800 text-lg mt-1'>{friend.name}</h3>
                        <p className='text-gray-400 text-sm'>{friend.days_since_contact}d ago</p>
                        <div className='flex flex-wrap justify-center gap-1'>
                            {friend.tags.map(tag => (
                                <span key={tag} className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full capitalize'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span className={`text-xs font-semibold px-4 py-1 rounded-full ${statusStyle(friend.status)}`}>
                            {statusLabel(friend.status)}
                        </span>
                    </div>
                ))}
            </div>)}
        </div>
    );
};

export default YourFriends;