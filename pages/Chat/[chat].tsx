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
import { useRouter } from 'next/router';
import { Tooltip } from '@nextui-org/react';
import SlimSidebar from '../../components/SlimSidebar';


function Chat() {

  // roomCollection
  const roomCollection=[{roomid:'1321232',roomname:'PelicanRoom'}, {roomid:'24455',roomname:'Study Room'}]
const router = useRouter()
  return (
    
    <div className="h-full w-full bg-blue-400 flex max-h-full overflow-hidden">

   
<SlimSidebar/>
      <GroupSelector rooms={roomCollection}/>
     


    <ChatBox/>


    </div>
  )
}

export default Chat