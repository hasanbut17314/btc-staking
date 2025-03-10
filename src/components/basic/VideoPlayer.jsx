import React from 'react'
import video from '/video.png'

const VideoPlayer = () => {
    return (
        <div className='py-10 max-w-7xl mx-auto xl:px-3 px-4'>
            <div>
                <img src={video} alt="video" className='max-h-[450px] mx-auto' />
            </div>
            <div className='mt-6 flex flex-col gap-3'>
                <h2 className='text-center text-2xl md:text-4xl'>Bitcoin Renaissance ®ETH Denver 2025</h2>
                <p className='text-center lg:w-3/4 mx-auto'>Expecience the energy of Bitcoin Renaissance 2024! This video captures the highlight strom our gatherings in Denver and Seoul, bringing together the leading minds in theBitcoin community</p>
            </div>
        </div>
    )
}

export default VideoPlayer