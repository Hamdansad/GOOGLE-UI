import React from 'react'

function Footer() {
  return (
   <>
    <div className='w-full h-[7%] bg-[#171717] flex justify-start items-center pl-[25px] text-[7px] sm:text-[13px]'>
      <p><a href="">India</a></p>
      </div>
      <div className='w-full h-[6%] bg-[#171717] border-t-[1px] border-[#28292a] flex' >
        <div className='w-[50%] h-[100%] flex justify-start items-center gap-3 pl-[25px] text-[7px] sm:text-[13px] sm:gap-5'>
          <p><a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">Advertising</a></p>
          <p><a href="https://www.google.com/intl/en_in/business/">Business</a></p>
          <p><a href="https://www.google.com/search/howsearchworks/?fg=1">Search works</a></p>
        </div>
        <div className='w-[50%] h-[100%] flex justify-end items-center gap-2 pr-[10px] text-[7px] sm:text-[13px] sm:gap-5'>
          <p><a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a></p>
          <p><a href="https://policies.google.com/terms?hl=en-IN&fg=1">Trems</a></p>
          <p><a href="">Settings</a></p>
        </div>
      </div>
   </>
  )
}

export default Footer