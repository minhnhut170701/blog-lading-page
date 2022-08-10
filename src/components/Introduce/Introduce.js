import React from 'react';

import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const Introduce = () => {
  return (
    <div className=' mt-20 mr-center space-y-16'>
        <ul className='uppercase flex items-center space-x-4 font-bold max-w-4xl justify-center mr-center'>
            <li>Vite</li>
            <li>-</li>
            <li>Audiam</li>
            <li>-</li>
            <li>Dican</li>
            <li>-</li>
            <li>Inermis</li>
        </ul>
        <div className='max-w-4xl mr-center text-center'>
            <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
        </div>
        <div className='relative flex items-center justify-around flex-col md:flex-row'>
            <div>
                <img src={img1} alt="error" />
                <p className='relative  text-6xl font-bold text-white -top-[250px] left-[140px]'>MEI</p>
            </div>
            <div>
                <img src={img2} alt="error" />
                <p className='relative  text-6xl font-bold text-white -top-[250px] left-[140px]'>CIBO</p>
            </div>
            <div>
                <img src={img3} alt="error" />
                <p className='relative  text-6xl font-bold text-white -top-[250px] left-[140px]'>EUM</p>
            </div>
        </div>
    </div>
  )
}

export default Introduce