import Image from 'next/image'
import React from 'react'

import {BeakerIcon,HomeIcon} from "@heroicons/react/solid"
import { StarIcon,BellIcon,ChatIcon,ChevronDownIcon,GlobeIcon, PlusIcon, SearchIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon, MenuIcon} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
// session cookie prevent reauthentication
// the data:session here means that we are just renaming the data variable to session. JS trick. but the value retrived is data
const {data:session}= useSession();



  return (
   <>
    <div className='sticky items-center top-0 z-50 flex bg-black text-white px-3 py-3 shadow-sm'> 
    {/* // need to specify domains when importing images. specify it in next.config.js */}
    {/* need to restart the server when new images are coded in */}
   
   
<Link href="/">


   <div className="relative h-12 w-19  rounded object-contain bg-[#292928] flex-shrink-0 cursor-pointer">
   <img className='w-full h-full' src="https://logomakercdn.truic.com/ux-flow/industry/bank-meta.png"></img>
   </div>
</Link>



   <div className="mx-7 flex items-center xl:min-w-[300px]">
<HomeIcon className="h-5 w-5"/>
<p className="ml-2 hidden flex-1 lg:inline">Home</p>
<ChevronDownIcon className="h-5 w-5"/>


   </div>
   
<form className="flex flex-1 items-center space-x-2 rounded-sm border border-[#1C1C1C] bg-[#1C1C1C] px-3 py-1">
<SearchIcon className="h-6 w-6 text-gray-400" />

<input className='flex-1 bg-[#1C1C1C] outline-none text-white rounded' type="text" placeholder="Search Reddit"/>
{/* hidden alows us to enter hidden */}
<button type="submit" hidden />

</form>

   <div className="flex">


{/* create custom utlitity class for all these icons in styles/global.css*/}
<SparklesIcon className="icon"/>
<GlobeIcon className="icon"/>
<VideoCameraIcon  className="icon"/>
<hr className='h-10 border border-gray-100'/>
<ChatIcon className="icon"/>
<BellIcon   className="icon" />
<PlusIcon className="icon" />
<SpeakerphoneIcon className = 'icon' /> 
   </div>

   <div className="ml-5 flex items-center lg:hidden">
<MenuIcon className="icon" />
   </div>

{/* Sign in. Sing out Buttor */}

{/* lg:flex makes it so that only on large screens can we see the sign in/out options. */}
{/* hidden makes it dissapear on small screens but the lg:flex makes it visibile on large screens */}
{/* if session exists, show signout logic(since user is signed in) else show sign in login */}
{session?(
   <div onClick={()=>signOut()} className=" hidden cursor-pointer rounded item-center space-x-2 border border-[#1C1C1C] p-2 lg:flex">


<div className="relative h-5 w-5 flex-shrink-0 ">
<Image src="https://links.papareact.com/23l" layout='fill' alt="" objectFit='contain' />
</div>

{/* creates the 1karma - and user name box  */}
<div className="flex-1 text-xs ">
<p className="text-gray-400">{session?.user?.name}</p>
<p className="text-gray-400">1 Karma</p>
</div>

<ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400'/>

</div>

)

:


(<div onClick={()=>signIn("google")} className=" hidden cursor-pointer item-center space-x-2 border border-gray-100 p-2 lg:flex">




<div className="relative h-5 w-5 flex-shrink-0">
<Image src="https://links.papareact.com/23l" layout='fill' alt="" objectFit='contain' />

</div>
<p className="text-gray-400">Sign In</p>

</div>)}





<div>
</div>

    </div>
    </>
  )
}

export default Header