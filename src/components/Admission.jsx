import React from 'react'

function Admission() {
  return (
    <div>
        <div className='w-full py-20 relative mt-20 bg-zinc-100 rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-9xl w-1/2 text-center font-bold uppercase'>ready to start your career?</h1>

            <div className='w-full mt-20 flex justify-center items-center'>

           <button className='group hover:bg-transparent hover:border-solid hover:border-black hover:text-black hover:transition-ease-in-all ml-10 px-10 py-5 bg-black rounded-full text-white flex gap-8 items-center'>SIGN IN AS ADMIN
            <div className='w-3 h-3 group-hover:bg-black bg-zinc-100 rounded-full'></div>
        </button>



       

      </div>

      <h1 className='m-5'>OR</h1>

      <div className=' group hover:bg-black hover:text-white  w-1/6 text-center  flex relative px-10 py-5 mb-10 ml-10 border-2 border-black rounded-full uppercase font-semibold gap-4 items-center'>REGISTER AS NEW
      <div className='w-3 h-3 group-hover:bg-zinc-50 bg-zinc-900 rounded-full'></div>
      </div>

      
      
      


        </div>
    </div>
  )
}

export default Admission