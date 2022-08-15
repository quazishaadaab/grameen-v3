import Link from 'next/link'
import {  useRouter } from 'next/router'
import React from 'react'

function Sidebar() {


    const router= useRouter()
  return (
    // the sidebar
    <div className='flex-[15%] bg-[#111111] max-h-[100%] pl-5 rounded h-full'>

    {/*the header where the logo is  */}
    <div className=" h-[10%] flex items-center justify-center p-3 space-x-2">

        <div className="h-[40px]  w-[40px] p-3"></div>

    <div >
        <div className=" text-sm text-white font-bold md:text-xs 2xl:text-sm">GrameenCanada Co.</div>
        <div className="text-sm text-[#A5A5A5] md:text-xs 2xl:text-sm"> Toronto,Ontario</div>

    </div>
        
        </div>


{/* main menu */}
    <div className=" h-[45%] items-center p-3">
        
        <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">MAIN MENU</div>
<div className=" h-[90%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}

<div onClick={()=>{router.push('/Dashboard/1234')}} className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div>



<div onClick={()=>{router.push('/')}} className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Feed </div>
</div>

<div  onClick={()=>{router.push('/Chat/0')}} className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Chat</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Profile</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Logout</div>
</div>



<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Creditors</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Debtors</div>
</div>








</div>


    </div>
{/* workloads */}
    <div className=" h-[25%] items-center p-3">

    <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">Financials</div>
<div className=" h-[80%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}
<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Balance Sheets</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Country Financial Data</div>
</div>


{/* <div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Dashboard</div>
</div> */}


</div>



    </div>

    {/* general */}
    <div className="h-[15%] items-center p-3">

    <div className="md:text-xs 2xl:text-sm text-xs font-[450] text-[#646464] content-start ">Tools</div>

<div className=" h-[70%] mt-2 space-y-2 items-start">

{/* individual sidebar option to be clicked */}
<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Peer Group</div>
</div>


<div className=" flex gap-2 cursor-pointer  buttonhover:content-white hover:bg-[#052440] items-center rounded ">
    <div className="  bg-white h-[20px] w-[25px]"></div>
    <div className='md:text-sm text-[#A5A5A5] w-[90%] hover:text-white 2xl:text-base font-[400]'>Reminders/Notes</div>
</div>




</div>

    </div>
 

</div>


)
}

export default Sidebar