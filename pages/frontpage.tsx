import { Button } from '@nextui-org/react'
import React from 'react'
import Slider from '../components/slider'

function frontpage() {
  return (
    <div className="w-full h-full bg-[url('https://st4.depositphotos.com/12985848/i/600/depositphotos_198500698-stock-photo-abstract-black-background-purple-smoke.jpg')] bg-cover bg-center">
     <div className="w-full h-full flex justify-center items-start backdrop-blur-3xl ">  
     
<div className='w-[50%] h-full py-9 px-5'>
     <div className="text-6xl font-[800] tracking-tighter text-white text-start   ml-5 ">Grameen Canada
     <div className="absolute mt-32 "><Slider/></div>
     </div>

</div>
        

        <div className=" w-[50%] h-full py-64 px-32 "> 
        <div className="bg-[#1C1C1C] w-[100%] h-[100%] rounded-3xl py-8 px-8 text-white font-[400] text-sm">Grameen.ca is a web application that allows you to link your bank account, send money to your peers, receive money from your peers, and communicate with the outside world about any business related/entrepreneurial content . The app is in the fintech space and serves as a way for people to transfer/receive small amounts of money from their peer group and facilitates group accountability and support. Users can create peer groups where peers in the group hold each other accountable on their financial goals by either communicating with each other or by sending/receiving money when someone is in need.</div>

        <Button className='mt-8' shadow color="gradient" size='xl' auto>
          Go To App
        </Button> </div>
        
        
        </div>
        </div>
  )
}

export default frontpage