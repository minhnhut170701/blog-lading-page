import React from 'react';

import img1 from "../images/blog-1.png";
import img2 from "../images/blog-2.png";
import img3 from "../images/blog-3.png";


const Blog = () => {
  return (
    <div className='max-w-full mt-20 flex flex-col items-center relative md:flex-row md:space-x-10 '>
        {/* row left */}
       <div className='w-[100%] md:w-[50%] p-4 md:p-0 space-y-10'>
           <div className='space-y-4'>
                <h2 className='text-6xl uppercase'>Hinc nobis <br />duo ut</h2>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores </p>
                <p className='font-bold text-lg'>read more...</p> 
           </div>
            <div>
                <h2 className='font-bold text-xl'>28/07</h2>
                <img src={img2} alt="blog" className='w-full h-full' />
            </div>
            <h2 className='text-6xl uppercase font-bold'>Eos no <br />liber <br />iudicabit.</h2>
       </div>
       {/* row right */}
       <div className='w-[100%] md:w-[50%] p-4 md:p-0 space-y-10'>
            <div className='text-right space-y-4'>
                <h2 className='font-bold text-xl'>07/08</h2>
                <img src={img1} alt="blog" className='w-full h-[200px] relative' />
            </div>
            <div className='space-y-4'>
                <h2 className='text-6xl uppercase'>Ea eum cibot <br />graece</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem  </p>
                <p className='font-bold text-lg'>read more...</p> 
            </div>
            <div className='relative'>
                <h2 className='font-bold text-xl'>15/07</h2>
                <img src={img3} alt="blog" className='w-full h-full' />
                <p className='absolute -right-[180px] top-[400px] text-tranfrom'>FREE PSD  TEMPLATE AVAILABLE OD SYMU.CO</p>
            </div>
       </div>

       <div className='absolute top-36 left-[450px] space-y-4 hidden md:block'>
           <div className='flex items-center'>
               <div className='w-[100px] h-[5px] bg-black rounded-md' />
               <div className='w-[100px] h-[5px] bg-white rounded-md' />
           </div>
           <div className='flex items-center relative left-[50px]'>
               <div className='w-[50px] h-[5px] bg-black rounded-md' />
               <div className='w-[100px] h-[5px] bg-white rounded-md' />
           </div>
           <div className='flex items-center'>
               <div className='w-[100px] h-[5px] bg-black rounded-md' />
               <div className='w-[100px] h-[5px] bg-white rounded-md' />
           </div>

       </div>
    </div>
  )
}

export default Blog