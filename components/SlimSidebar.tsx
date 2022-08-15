import { Tooltip } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import FeedIcon from '@mui/icons-material/Feed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';

function SlimSidebar() {

    const router= useRouter()
  return (

    <>
    <div className="bg-[#111111] h-full w-[5%] items-center space-y-5 px-3 cursor-pointer">


    <Tooltip placement="right" content={'Dashboard'} color='invert' rounded >
          <div onClick={()=>{router.push("/Dashboard/0")}} className=' data-tooltip-target="tooltip-right" data-tooltip-placement="right"  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <AccountBalanceIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
    </Tooltip>
    
    <Tooltip placement="right" content={'Feed'} color='invert' rounded >
    
          <div onClick={()=>{router.push("/")}}className=' w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <FeedIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    <Tooltip placement="right" content={'Chat'} color='invert' rounded >
     <div onClick={()=>{router.push("/Chat/0")}} className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <MarkUnreadChatAltIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    
    
    <Tooltip placement="right" content={'Profile'} color='invert' rounded >
    <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1cursor-pointer'>
            <PersonIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    <Tooltip placement="right" content={'Logout'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <LogoutIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    <Tooltip placement="right" content={'Financials'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <ShowChartIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    <Tooltip placement="right" content={'Creditors'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <DescriptionIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
         
    
     
    
          </div>  
          </>
          )
}

export default SlimSidebar