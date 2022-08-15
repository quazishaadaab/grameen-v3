import React from 'react'
import ChatBox from '../../components/ChatBox'
import GroupSelector from '../../components/GroupSelector'


import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import FeedIcon from '@mui/icons-material/Feed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';



function Chat() {

  const roomCollection=[{roomid:'1321232',roomname:'PelicanRoom'}, {roomid:'24455',roomname:'Study Room'}]

  return (
    <div className="h-full w-full bg-blue-400 flex max-h-full overflow-hidden">


      <div className="bg-[#111111] h-full w-[5%] items-center space-y-5 px-3 cursor-pointer">

      <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <AccountBalanceIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

      <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <FeedIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

 <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <MarkUnreadChatAltIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

 <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1cursor-pointer'>
        <PersonIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

 <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <LogoutIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

 <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <ShowChartIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

 <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
        <DescriptionIcon sx={{ color: '#707070' }}  fontSize="large" />
      </div>

     

 

      </div>

      <GroupSelector rooms={roomCollection}/>



    <ChatBox/>

    
    </div>
  )
}

export default Chat