import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-100 py-16 px-4 text-center'>
       
            <h1 className='text-4xl font-bold text-gray-800 mb-3'>
                Friends to keep close in your life
            </h1>
          
            <p className='text-gray-400 text-sm max-w-md mx-auto mb-6'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            {/* Button */}
            <button className='btn btn-sm bg-[#244d3F] text-white border-none hover:bg-[#243d32]'>
                + Add a Friend
            </button>

            <div className='grid grid-cols-4 gap-4 max-w-3xl mx-auto mt-10'>
                <div className='bg-white border border-gray-200 rounded-lg py-6'>
                    <p className='text-3xl font-bold text-gray-800'>10</p>
                    <p className='text-sm text-gray-400 mt-1'>Total Friends</p>
                </div>

                <div className='bg-white border border-gray-200 rounded-lg py-6'>
                    <p className='text-3xl font-bold text-gray-800'>3</p>
                    <p className='text-sm text-gray-400 mt-1'>On Track</p>
                </div>

                <div className='bg-white border border-gray-200 rounded-lg py-6'>
                    <p className='text-3xl font-bold text-gray-800'>6</p>
                    <p className='text-sm text-gray-400 mt-1'>Need Attention</p>
                </div>

                <div className='bg-white border border-gray-200 rounded-lg py-6'>
                    <p className='text-3xl font-bold text-gray-800'>12</p>
                    <p className='text-sm text-gray-400 mt-1'>Interactions This Month</p>
                </div>
            </div>
            <hr className=" mx-auto mt-20 h-px w-1/2 border-0 bg-gray-200 dark:bg-gray-300" />
        </div>
    );
};

export default Banner;