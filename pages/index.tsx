import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import Feed from '../components/Feed'
import Dashboard from './Dashboard/[dashboard]'
import Sidebar from '../components/Sidebar'
import SlimSidebar from '../components/SlimSidebar'


const Home: NextPage = () => {

  return (
    // gives post box and all componnents under this div a margin( so it creates a border around the components instead of the components being
    // having no margins and appearing from the left most edge to the right most edge)
  
  <div className="w-full h-full flex "> {/*  mx-auto will center it horizontally. auto is dynamic so when more text is inserted, it will automatically center itself*/}

      <Head>
        <title>Grameen Canada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<SlimSidebar/>

      <div className="flex-[85%] bg-slate-300 rounded max-h-full overflow-y-scroll pb-6 bg-[#1C1C1C]">
      <Header />

    


      <div className=" w-full  pt-16 px-32">
        <div className="w-[70%] items-center mx-[15%] mb-4"><PostBox/></div>
        <div className=' mx-[15%] items-center w-[70%] max-h-full overflow-y-scroll'><Feed/></div>
      </div>
     
         </div>
      
{/* Post Box */}
<div>


</div>


    </div>
  )
}

export default Home
