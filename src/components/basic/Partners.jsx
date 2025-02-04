import React from 'react'
import pic1 from "/partner1.png"
import pic2 from "/partner2.png"
import pic3 from "/partner3.png"
import pic4 from "/partner4.png"
import pic5 from "/partner5.png"
import pic6 from "/partner6.png"
import pic7 from "/partner7.png"
import pic8 from "/partner8.png"
import pic9 from "/partner9.png"
import pic10 from "/partner10.png"
import pic11 from "/partner11.png"
import pic12 from "/partner12.png"
import pic13 from "/partner13.png"
import pic14 from "/partner14.png"
import pic15 from "/partner15.png"
import bg from "/partnerbg.png"
import bal from "/ball.png"

const Partners = () => {
    return (
        <div className='py-16 bg-black xl:px-0 sm:px-6 px-3 relative z-10'>
            <img src={bg} alt="bg" className='absolute top-0 left-1 max-w-64 h-full object-cover z-[-1] opacity-30' />
            <img src={bal} alt="bg" className='absolute top-0 left-0 max-w-64 h-full object-cover z-[-1]' />
            <div className='bg-[#D9D9D9] max-w-5xl mx-auto sm:p-8 p-5 rounded-lg'>
                <div className='flex md:flex-row flex-col items-center justify-between text-black'>
                    <h1 className='md:text-6xl text-4xl font-bold'>Backers</h1>
                    <p className='sm:text-sm text-xs md:w-1/2'>The Babylon protocol development is backed by cutting-edge investment firms who believe in Bitcoin and its use cases.</p>
                </div>
                <div className='sm:mt-14 mt-9 grid lg:grid-cols-5 gap-8 sm:gap-10 sm:grid-cols-3 grid-cols-2 place-content-center place-items-center'>
                    {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15].map((item, index) => <img src={item} alt="partner" key={index} className='sm:max-w-28 max-w-24 h-auto' />)}
                </div>
            </div>
        </div>
    )
}

export default Partners