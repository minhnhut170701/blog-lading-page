import React from 'react';



const Header = () => {
  return (
    <div className='max-w-full '>
        <nav className='flex items-center justify-between mt-10 p-2 md:p-0'>
            <h1 className='text-3xl font-bold uppercase'>AFRODYA</h1>
            <div className='hidden md:block'>
                <ul className='flex items-center space-x-7 relative p-2 uppercase'>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <div className='w-[70px] h-[4px] rounded-sm bg-black absolute top-9' />
                </ul>
            </div>

            <div className='flex flex-col space-y-2 md:hidden'>
                <span className='w-[50px] h-[4px] bg-black'></span>
                <span className='w-[50px] h-[4px] bg-black'></span>
                <span className='w-[50px] h-[4px] bg-black'></span>
            </div>
           
         </nav>
        
        <div className='mt-24 w-full h-[545px] bg-banner-1 relative'>
            <div className='flex justify-center pt-64'>
                <h2 className='uppercase text-6xl text-white font-bold '>Free template</h2>
            </div>  

            <div className='absolute top-[430px] -left-[100px] text-tranfrom '>
                <h2 >ENJOY THE PLEASURE</h2>
            </div>
        </div>
    </div>
    
  )
}

export default Header