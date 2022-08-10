import React from 'react';

import imgfooter from "../images/4.png";

import logo1 from "../images/i-1.png";
import logo2 from "../images/i-2.png";
import logo3 from "../images/i-3.png";
import logo4 from "../images/i-4.png";
import logo5 from "../images/i-5.png";

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='flex space-x-10 flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%] relative'>
                <img src={imgfooter} alt="error" className='w-full h-full' />
                <div className='w-[500px] h-[300px] bg-gray-100 absolute top-28 left-[400px] -z-10 hidden md:block' />
            </div>
            <div className='w-[100%] md:w-[50%] space-y-10 mt-4 md:mt-0 p-4 md:p-0'>
                <h2 className='text-center md:text-right text-3xl font-medium uppercase'>Pri att mediocrem <br />
                    <span className='text-5xl'>
                     corrumpit
                    </span>
                </h2>
                <p>Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <p className='text-lg font-bold'>read more...</p>
            </div> 
        </div>

        {/* menu footer */}
        <div className=' space-y-10 mt-20'>
            <ul className=' flex items-center space-x-6  justify-center 
            max-w-4xl mr-center uppercase'>
                <li>About</li>
                <li>-</li>
                <li>TERMS AND CONDITioNS </li>
                <li>-</li>
                <li>SYMU FREEBIES </li>
                <li>-</li>
                <li>CONTACT US</li>
            </ul>

            <div className=' max-w-4xl mr-center text-center'>
                <p>This tempalte is free to use for personal or commercial projects, attribution is appreciated but not required.
If you have any additional questions that may not have been answered above, please don't hesitate to contact us at contact@symu.co</p>
            </div>

            <div className='flex items-center space-x-6 justify-center pb-10'>
                <img src={logo1} alt='error' className='w-10 h-10' />
                <img src={logo2} alt='error' className='w-10 h-10' />
                <img src={logo3} alt='error' className='w-10 h-10' />
                <img src={logo4} alt='error' className='w-10 h-10' />
                <img src={logo5} alt='error' className='w-10 h-10' />
            </div>
        </div>

    </div>
  )
}

export default Footer