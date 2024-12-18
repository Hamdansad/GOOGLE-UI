import React from 'react'
import flask from '/src/assets/flask-solid-24 (1).png'
import menu from '/src/assets/menu-regular-24.png'
import h from '/src/assets/h-letter.256x256.png'
 function Navbar() {
  return (
    <>
     <div className='w-full h-[8%] flex'>
            <div className='w-1/2 h-full flex justify-start items-center gap-x-2 pl-4 text-[10px] sm:text-[13px] sm:gap-5'>
              <p><a href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header">About</a></p>
              <p><a href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB&pli=1">Store</a></p>
            </div>
            <div className='w-1/2 h-full flex justify-end items-center gap-x-2 pr-4 text-[10px] sm:text-[13px] sm:gap-5'>
              <p><a href="">Gmail</a></p>
              <p><a href="https://www.google.com/imghp?hl=en&ogbl">Image</a></p>
              <a href="https://labs.google.com/search?source=hp"><img className='w-[20px] h-[15px]' src={flask} alt="" /></a>
              <a href=""><img className='w-[20px] h-[20px]' src={menu} alt="" /></a>
              <a href=""><img className='w-[20px] h-[20px]' src={h} alt="" /></a>
            </div>
          </div>
    </>
  )
}
export default Navbar;