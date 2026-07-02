import React from 'react'
import logoImage from "../../assets/images/logoImage.png";


const FooterSection = () => {
  return (
    <section className='flex md:px-8 flex-wrap md:gap-10 md:mt-30 pb-30 md:px-10 pt-5'>

      {/* Footer-left  */}

    <div className="flex flex-1 mb-10 px-4">
    <div>
      <div className=" flex items-center w-[225px] h-[48px] gap-2 mb-5">
        <img className="h-12 w-12" src={logoImage} alt="logo-image" />
        <h1 className="text-2xl font-bold opacity-80">
          FloraVision.
        </h1>
      </div>

      <p className="mb-8 text-md">
        "From lush indoor greens to vibrant outdoor blooms, our plants are
        crafted to thrive and elevate your living environment."
      </p>

        <div className="flex gap-5 font-bold text-2xl ">
            <h1>FB</h1>
            <h1>TW</h1>
            <h1>LI</h1>
        </div>
    </div>
    </div>

      {/* Footer-middle  */}

      <div className='px-4 pb-5 flex flex-1 md:justify-center 2xl:justify-start mb-5'>
    <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-bold mb-3'>Quick Link's</h1>
        <a className='border-b-2 w-12' href="#">Home</a>
        <a className='border-b-2 w-32' href="#">Type's of Plant's</a>
        <a className='border-b-2 w-15' href="#">Contact</a>
        <a className='border-b-2 w-15' href="#">Privacy</a>
    </div>
    </div>

      {/* Footer-right  */}

     
        <div>
            <h1 className=" text-xl pl-2 font-bold mb-5">For Every Update.</h1>
            <div className=" h-[50px] flex border border-2 border-gray-400 rounded-lg mb-24">
               
                <input type="email" placeholder="Enter Email" className="text-white md:mx-2 placeholder:text-gray-500 outline-none"
                />
               
                <button className='border border-amber-50 bg-white text-black rounded-lg m-0.5 px-1'>SUBSCRIBE</button>
            </div>

            <p className='pl-2'>FloraVision © all right reserv</p>
        </div>
     

    </section>
  )
}

export default FooterSection;
