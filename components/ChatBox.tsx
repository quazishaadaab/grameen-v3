import { useRouter } from 'next/router'
import React from 'react'


function ChatBox() {

    //chat box is only for a singular room. 
const router = useRouter()
    const roomData ={ 
roomid:'13234',
roomname:'PelicanRoom',
members: 5,

messages : [{
    author:'tom ister',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photoURL:'https://www.w3schools.com/w3images/avatar6.png',
    timeStamp:' 3:00 PM AUG 9TH'
},
{    author:'julian mcdonald',
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
photoURL:'https://www.w3schools.com/w3images/avatar2.png',
timeStamp:' 9:00 PM AUG 9TH'
},

{    author:'theodore roosevelt',
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
photoURL:'https://www.w3schools.com/howto/img_avatar2.png',
timeStamp:' 4:00 PM AUG 9TH'}

]
    }

    React.useEffect(() => {
    
        // retrive all the rooms based off the url 

        //retrive roomID from URL  
        retriveRoomIdFromURL()


        //send api get request to the the room data for that query id we just got 
    }, [router.query.chat]) //the useEffect will be called everytime the roomd id changes, so the api will fetch new room data everytime the query id changes
    

const retriveRoomIdFromURL=()=>{
console.log(router.query.chat)
}




  return (
    <>

  <div className="bg-green-200 w-[50%] max-h-full">
      


{/* Chat Header  */}
<div className=" w-full h-[10%] bg-[#111111] py-4 px-4 items-center border-b-2 border-[#292929]">
    <div className=" w-full h-7 text-xl text-white font-[400] tracking-normal" ># {roomData?.roomname}</div>
       {/* members count and add members */}
      <div className="flex text-white text-xs ml-4 mt-1 gap-2 ">
            <div>{roomData?.members} members</div>
            <div>Add Members</div>
      </div>
  </div>



{/* Start Actual Chat */}



<div className="bg-[#111111] overflow-y-scroll h-full w-full ">
{/* Message boxes (each individual message div for each message) */}


{/* map from here  */}
{
roomData?.messages.map((messages)=>{

return (


    <>
    
<div className="bg-[#111111] w-full h-auto max-h-auto p-6 border-y-[0.3px] border-[#292929]">
<div className="flex">

    <img  src={messages?.photoURL} className='rounded-xl h-10 w-10 mt-1'></img>

    <div className=' h-full flex-row break-normal max-w-full ml-3'>

        <div className="flex w-full h-4 mb-2 items-center">
            <div className='text-sm h-full w-auto text-white font-[300]'>{messages?.author}  </div>
            <div className='text-xs text-white mt-1 ml-2 font-[300]'> - {messages?.timeStamp}</div>
        </div>

        <div className='text-sm break-all text-[#797979] font-[300]'>{messages?.content}</div>
    </div>
<hr></hr>
</div>

</div>


    </>
    
)


})
}

{/* the message box div ends here */}
{/* inseart message div  */}


<div className=" bg-gradient-to-t from-black to-[#111111]  absolute top-[86%] h-[14%] w-[50%]  border-1 border-gray text-white px-6 py-6 "> 

<form className='w-full h-full  border-[1px] rounded-xl rounded border-[#7B7972] '>
<input className='w-full h-full bg-[#111111] rounded-xl  text-white text-xs pb-7 px-4 max-w-full '></input>

</form>

</div>











</div>




  </div>





{/* main border */}

  <div className="bg-[#111111] w-[25%] h-full border-l-[1px] border-[#292929]">


    <div className="bg-[#111111] w-full h-[10%] border-b-2 border-[#292929] px-5 py-3    ">

        <div className='text-xl text-white mb-1'>Group Info</div>
        <div className='text-sm text-[#6F6F6F] font-[300]'>Created Nov 10</div>
    </div>

    <div className=' px-5 py-5 '>

        <div className='text-[#6F6F6F] text-xs mb-3'>MEMBERS</div>


{/* members list div  */}
{/* members border */}

        <div className='px-8 border-l-2 border-[#292929]  h-auto max-h-[50%] overflow-y-scroll absolute '>

            {/* members data container */}
            {roomData?.messages.map((messages)=>{

                return (
                    <>
                        <div className="flex w-full items-center gap-x-2 pb-4  ">
                        <img src={messages?.photoURL} className='rounded-xl h-7 w-7  '></img>
                        <div className=" w-full h-6 text-white text-sm font-[400] ">{messages?.author}</div>

                        </div>
                    </>
                )
            })}

            
            {/* members data container */}

        </div>


{/* members list div  */}


  
    </div>
    
  </div>

    </>
  )
}

export default ChatBox