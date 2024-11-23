import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div  data-scroll data-scroll-speed="-0.4"  className='w-full h-auto bg-zinc-50 border-t-4'>
        <div className="textstructure mt-60 ml-20">
            <div className="masker ">
                <h1 className=' uppercase font-["Roboto Condensed Light"]  text-9xl font-semibold tracking-tighter'>Where <br /> Knowledge 📖 <br />Meets 🦾Innovation.</h1>
            </div>
            <div className="border-t-2 border-zinc-300 mt-28 flex justify-between items-center py-5 px-10" >     
             {[
              "NIRF Ranking:#1","AICTE Approved",].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>

              ))}

              <div className='start flex items-center gap-5'>
              <div className='px-5 py-2 border-2 rounded-full uppercase font-semibold  hover:bg-black hover:text-white'>enroll now</div>
              <div className='w-10 h-10 flex items-center justify-center border-2 border-zinc-200 rounded-full  hover:bg-black hover:text-white'>
                <span><GoArrowUpRight /></span>
              </div>
               </div>

            </div>

           

        </div>

    </div>
  )
}

export default LandingPage;