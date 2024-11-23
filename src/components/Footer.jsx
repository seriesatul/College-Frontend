import React from 'react'

function Footer() {
  return (
    <div  data-scroll data-scroll-section  data-scroll-speed="0.2" className='w-full flex justify-between gap-5 p-20 bg-slate-700 text-white rounded-tl-2xl  rounded-tr-2xl'>
<div className='flex h-[100vh] justify-between flex-col'>
<h1 className='text-8xl tracking-tighter  text-start font-bold uppercase'>WE <br /> ARE <br />EVERYWHERE!</h1>

<div className="logo text-3xl">
<h1>p<i>i</i>tm.</h1>
</div>

</div>
<div className='flex flex-col justify-between'>
<h1 className='text-7xl tracking-tighter  text-start font-bold uppercase'>PRESENTATIONS</h1>

<div className='flex justify-between'>

<div className='w-1/2'>

<div className='dets mt-20 '>
S: <br />
<a className='block mt-1' href="#">Facebook</a>
<a className='block mt-1' href="#">Instagram</a>
<a className='block mt-1' href="#">LinkedIn</a>
<a className='block mt-1' href="#">Google PLus</a>
<a className='block mt-1' href="#">Youtube</a>
</div>


<div className='dets mt-20 '>
L: <br />
<a className='block mt-1' href="#">Karchana,Bendo.</a>
<a className='block mt-1' href="#">Prayagraj</a>
</div>

<div className='dets mt-10 '>
<a className='block mt-1' href="#"> </a>
<a className='block mt-1' href="#">212301</a>
<a className='block mt-1' href="#">Allahabad-Mirzapur Road</a>
</div>

<div className='dets mt-20 '>
E: <br />
<a className='block mt-1' href="#">pitm740@gmail.com</a>
</div>

<div className='dets mt-10 '>
<a className='block mt-1' href="#">+91-9450582026 </a>

</div>


</div>

<div className='w-1/2 flex items-center'>

<div className='dets mt-20 '>
M: <br />
<a className='block mt-1' href="#">Abouts</a>
<a className='block mt-1' href="#">Courses</a>
<a className='block mt-1' href="#">News</a>
<a className='block mt-1' href="#">Events</a>
<a className='block mt-1' href="#">Contacts</a>
</div>


</div>
</div>


</div>




    </div>
  )
}

export default Footer