import {useRouter} from 'next/router';
import React from 'react'

import { v4 as uuidv4 } from 'uuid';

function GroupSelector({rooms}:any) {

const router = useRouter()
const [roomid,setRoomID]=React.useState('')




const roomCollection=[{roomid:'1321232',roomname:'PelicanRoom'}, {roomid:'24455',roomname:'StudyRoom'}]
//get room collection everytime database room collection updates. 
    React.useEffect(() => {
  
    }, [])
    

const getRooms=()=>{
//backend stuff 
}

    const createRoom=()=>{

    const room_id= uuidv4()
    setRoomID(room_id)

    }


    const selectRoom=(roomid:String)=>{

    router.push(`/Chat/${roomid}`)

    }



  return (
    <>

<div className="bg-[#1C1C1C] w-[20%] p-5">

<div className="bg-[#111111] w-full rounded h-10 mb-6 p-2.5 cursor-pointer text-white text-sm">Search</div>

<div className='mb-6'>
<div className="text-white text-xs bg-white-100 rounded w-full h-5 mb-2 font-[200] tracking-wider">FAVORITES</div>

{/* Add sidebar option here  */}




{rooms.map((room:any)=>{
  


    return (
    <div onClick={()=>{selectRoom(room?.roomid) }} key={room?.roomname} className="w-full rounded h-10  hover:bg-[#052440] cursor-pointer text-sm text-slate-600 pt-2.5 px-3" ># {room?.roomname}</div>
    )
})} 




</div>




<div className="mb-6">
<div className="text-white text-xs bg-white-100 rounded w-full h-5 mb-2 font-[200] tracking-wider">DIRECT MESSAGES</div>


{/* add side bar option here ( sidebar friends options) */}

{/* friend1  */}
<div className="gap-x-2 flex w-full rounded h-10 items-center hover:bg-[#052440] cursor-pointer text-sm text-slate-600 px-3">
<div className='bg-blue-300 rounded-xl h-6 w-7 text-center text-sm py-[2px]'>D</div>
<div className="w-full cursor-pointer text-sm text-slate-600 "> tom ister</div>
</div>

{/* friend2 */}

<div className="gap-x-2 flex w-full rounded h-10 items-center hover:bg-[#052440] cursor-pointer text-sm text-slate-600 px-3">
<div className='bg-red-300 rounded-xl h-6 w-7 text-center text-sm py-[2px]'>D</div>
<div className="w-full cursor-pointer text-sm text-slate-600 "> naz haque</div>
</div>

{/* friend3 */}
<div className="gap-x-2 flex w-full rounded h-10 items-center hover:bg-[#052440] cursor-pointer text-sm text-slate-600 px-3">
<div className='bg-green-300 rounded-xl h-6 w-7 text-center text-sm py-[2px]'>D</div>
<div className="w-full cursor-pointer text-sm text-slate-600 "> john a mcdonald</div>
</div>


</div>

<div className='mb-6'>

<div className="flex items-center mb-2">
    <div className="text-white text-xs rounded w-full h-5 font-[200] tracking-wider">GROUPS</div>

    <div className=" w-[10%] h-full pb-2 rounded-3xl text-center text-3xl text-white cursor-pointer" onClick={()=>{createRoom()}}>+</div>
</div>

{/* Add sidebar option here  */}
<div className="w-full rounded h-10  hover:bg-[#052440] cursor-pointer text-sm text-slate-600 pt-2.5 px-3"> #PeerGroup 1</div>
<div className="w-full rounded h-10  hover:bg-[#052440] cursor-pointer text-sm text-slate-600 pt-2.5 px-3"> #PeerGroup 2</div>

</div>

      </div>
      </>
  )
}

export default GroupSelector