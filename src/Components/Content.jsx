import React from 'react'
import gif from "../assets/celebrating-chess-copy-6753651837110651-la202124.gif"
function Content() {
  return (
   <>
    <div className='w-full h-[79%] flex justify-start items-center gap-6 flex-col '>
       
        <a href="https://www.google.com/search?q=Chess&oi=ddle&ct=383777860&hl=en-GB&si=ACC90nyvvWro6QmnyY1IfSdgk5wwjB1r8BGd_IWRjXqmKPQqm1ceeN4rC_k_70QRZRDk1_O45rbraMp3xyj7BgkVx_hP1b3Mcg%3D%3D&source=doodle-ntp&ved=2ahUKEwio_6XqlKWKAxWT4zgGHaWLFCAQPXoECAAQAA"><img src={gif} alt="error" /></a>
        <div className='w-[90%] h-[9%] relative sm:w-[40%]'>
          <img className='w-5 absolute top-[10px] left-[10px] sm:top-[15px]' src="src\assets\109-1092764_searchicon-png.png" alt="" />
          <input className='w-[100%] h-[90%] outline-none rounded-full bg-[#4d5156] pl-12' type="text" />
        </div>
        <div className='flex justify-center items-center gap-4 '>
          <p className='w-28 bg-[#303134] text-center h-5 hover:border-[1px] hover:border-[grey] text-[10px] sm:text-[13px] sm:w-36'><a href="">Google Search</a></p>
          <p className='w-28 bg-[#303134] text-center h-5 hover:border-[1px] hover:border-[grey] text-[10px] sm:text-[13px] sm:w-36'><a href="https://doodles.google/">I'm Feeling Lucky</a></p>
        </div>
        <div className='flex justify-center items-center gap-2 text-[7px] text-blue-300 sm:text-[13px]'>
          <p className='text-white '>Google offered in:</p>
          <p><a href="">हिन्दी</a></p>
          <p><a href="">বাংলা</a></p>
          <p><a href="">తెలుగు</a></p>
          <p><a href=""> मराठी</a></p>
          <p><a href="">தமிழ்</a></p>
          <p><a href="">ગુજરાતી</a></p>
          <p><a href="">ಕನ್ನಡ</a></p>
          <p><a href="">മലയാളം</a></p>
          <p><a href="">ਪੰਜਾਬੀ</a></p>
        </div>
      </div>
    
      
   </>
  )
}

export default Content