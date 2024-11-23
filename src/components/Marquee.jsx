import {motion} from 'framer-motion';
import React from 'react';


function Marquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="0.2" className='w-full py-10 bg-[red] text-white rounded-3xl'>
        <div className='ml-10 text border-t-2 gap-8  tracking-tighter border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration: 8}} className=' ml-10 text-[22vw] leading-none font-["Roboto Condesed Light"] tracking-tighter uppercase font-bold'>we are pitians</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration: 8}} className='ml-10 text-[22vw] leading-none font-["Roboto Condesed Light"] tracking-tighter uppercase font-bold'>we are pitians</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration: 8}} className='ml-10 text-[22vw] leading-none font-["Roboto Condesed Light"] tracking-tighter  uppercase font-bold'>we are pitians</motion.h1>
        </div>
    </div>
  );
}

export default Marquee;