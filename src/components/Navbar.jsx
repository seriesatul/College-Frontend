import React from 'react'

function Navbar() {
  return (
    <>
    <div className='navbar backdrop-blur-sm fixed z-[100] w-full px-20 py-8 flex justify-between items-center'>
    <div className="logo text-3xl">
        <h1>p<i>i</i>tm.</h1>
    </div>

    <div className="links ">
        {["Home","About","Courses","News","Events","Contacts"].map((item, index)=>(
            <a className='text-md font-semibold px-8'>{item}</a>
        ))}
    </div>


    </div>


    </>
  );
}

export default Navbar;