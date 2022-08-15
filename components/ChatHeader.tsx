import React from 'react'

function ChatHeader({roomname}:any) {
  return (
    <div className=" w-full h-[10%] bg-[#111111] py-4 px-4 items-center border-b-2 border-white">
    <div className=" w-full h-7 text-xl text-white font-[400] tracking-normal" ># {roomname}</div>
       {/* members count and add members */}
      <div className="flex text-white text-xs ml-4 mt-1 gap-2 ">
            <div>6 Members</div>
            <div>Add Members</div>
      </div>
  </div>
)
}

export default ChatHeader