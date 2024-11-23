
import React from 'react'



function Projects() {

  return (
    
    <div>
    <div  data-scroll data-scroll-section  data-scroll-speed="0.3" className='mt-10 border-b-[1px] py-10 bg-slate-300 border-black rounded-2xl'>
      <h1 className='py-5 px-10 ml-10 border-b-[1px] border-black uppercase font-bold text-9xl text-black'>Courses<i className=' text-7xl lowercase font-extralight'>@pitm.</i></h1>
      <div className="cards mt-10 px-10 w-full flex gap-4">
        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        <div 
         className=" group card relative w-full h-full rounded-xl overflow-hidden">
          <img className=' group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-cover' src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className=' font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>COMPUTER SCIENCE <br /> ENGINEERING</h1>
        </div>
        </div>


        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        <div className="group relative card w-full h-full rounded-xl overflow-hidden">
          <img className='group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-coverr' src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className=' font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>ELECTRICAL <br /> ENGINEERING</h1>
        </div>
       
        </div>
      </div>

      <div className="cards mt-10 px-10 w-full flex gap-4">
        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        <div className="group relative card w-full h-full rounded-xl overflow-hidden">
          <img className=' group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-cover' src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className=' font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>MECHANICAL <br /> ENGINEERING</h1>
        </div>
        </div>
        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        
        <div className="group relative card w-full h-full rounded-xl overflow-hidden">
          <img className=' group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-cover' src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className='tracking-tighter font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>ELECTRONICS <br /> & <br /> COMMUNICATION</h1>
        </div>
        </div>
      </div>

      <div className="cards mt-10 px-10 w-full flex gap-4">
        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        
        <div className="group relative card w-full h-full rounded-xl overflow-hidden">
          <img className=' group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-cover' src="https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className=' font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>CIVIL ENGINEERING</h1>
        </div>
        </div>
        <div className=" cardcontainer w-1/2 relative h-[90vh] rounded-xl ">
        
        
        <div className="group relative card w-full h-full rounded-xl overflow-hidden">
          <img className=' group-hover:scale-95 group-hover:transition-all ease-in duration-500 absolute rounded-xl h-full w-full bg-cover' src="https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1 className=' font-semibold whitespace-nowrap absolute z-10 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transistion-all ease-in duration-500'>OTHERS</h1>
        </div>
        </div>
      </div>

      <div className='w-full h-[50vh] flex justify-center items-center'>

      <button className='group hover:bg-transparent hover:border-solid hover:border-black hover:text-black hover:transition-ease-in-all ml-20 px-10 py-5 bg-black rounded-full text-white flex gap-8 items-center r'>VIEW ALL COURSES
            <div className='w-3 h-3 group-hover:bg-black bg-zinc-100 rounded-full'></div>
        </button>
      </div>


      </div>
   

    </div>
  )
}

export default Projects