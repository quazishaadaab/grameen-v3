import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Plaid from "./plaid";

import { useDispatch } from "react-redux";
import { setFinancialData } from "../../reduxs/userSlice";
import { useRouter } from "next/router";
import { loggedIn } from "./src/Components/Link";
import { json } from "stream/consumers";
import Context from "./context";
import { useSession } from "next-auth/react";
import SlimSidebar from "../../components/SlimSidebar";
import Header from "../../components/Header";
import Example from "../../components/Chart";
import { CircularProgress } from "@mui/material";



type data ={
accounts : any,
item:any,
request_id : String

}



let port = 'http://localhost:8000'

function Dashboard() {

  const session = useSession()
 
  const { linkSuccess, isItemAccess } = useContext(Context);


  const [account_id,setAccountId] = useState('')

  const router = useRouter()
  const [update,setUpdate] =useState(false)
const [account,setAccount] = useState({

available:0,
current:0,
iso_currency_code:"",
limit:null,
unofficial_currency_code:null

})
const [account_details,setDetails] =useState({
  officialName: '',
  type:''
})
  const dispatch = useDispatch();



  const financialData = {

    account_id : account_id, // your account number
    balance : account?.current, //how much you have
    available_credit :account?.available , //how much you can borrow
    account_name : account_details?.officialName , //TD Rewards or Plaid Gold
    account_type : account_details?.type, //checking or saving
    currency: account?.iso_currency_code, //USD or CAD
  }




useEffect( () => {

accounts()
dispatch(
    setFinancialData({

      balance: financialData?.balance,
      expenses:0,
      credit:financialData?.available_credit,
      account_number:financialData?.account_id
    
    })

  );    

console.log(update)

}, [account_id])





  const No_SSR_Plaid = dynamic(
    ()=> import('./plaid'),{ssr:false}


  )

  const accounts =async()=>{

    setUpdate(true)
    try{



  const response= await fetch(`${port}/api/balance`, { method: "GET" })
   const data = await response.json()

      setAccount(data?.accounts[0]?.balances)
      setAccountId(data?.accounts[0]?.account_id)
      console.log('account_id set')

      setDetails(
        {officialName:data?.accounts[0]?.official_name,
        type:data?.accounts[0]?.subtype}
      )

    }catch{
    console.log('error has occured')  ;
    } }





  return (
    <>
  


    <div className="flex h-[100%]">

      {/* sidebar is flex 15% */}
      <SlimSidebar />

      {/* code header here */}

      <div className="flex-[100%]  items-center  py-5 px-5 space-y-4 bg-[#1C1C1C] ">

      

        {/* greeting */}
        <div className=" h-[10%] pl-3 items-center flex ">

        
<div>
          <div className="text-2xl  h-[60%] md:mt-2 text-white font-[400] 2xl:text-3xl   md:text-2xl 2xl:mt-10 ">
            Dashboard
          </div>
          <div className=" text-sm h-[40%] text-gray-50 ">
{session?.data?.user?.name ?(`Good to see you again ${session?.data?.user?.name}`):('Good to see you again')}
          </div>

</div>



{ isItemAccess && linkSuccess ? (

setTimeout(() => {
  accounts()

}, 0)

):(!account_id && 
<div className="ml-[50%]"><Plaid/></div>


)

}






        </div>



      



        {/* app spent */}
        <div className="bg-[#111111] h-[45%] flex p-2 space-x-3 pt-5 rounded">
          {/* chart */}
          <div className="  text-base text-white font-[400] w-[50%] h-[10%] absolute z-20 ml-3">App Spent Summary </div>

          <div className="flex-[70%] relative z-0 p-2">

            <div className=" h-[100%] w-[100%]  z-10 p-6 max-h-full max-w-full grid"><Example/></div>

          </div>

          {/* financials */}
         
          <div className="flex-[30%] pt-3 items-center">

            <div className="items-center h-[50%] w-[100%] p-1">



              <div className="h-[40%] w-[100%] 2xl:text-6xl md:text-5xl text-[#17CC49] font-[400]  ">

                {`${account?.current} ${account?.iso_currency_code}`}
              </div>
 
              <div className="h-[20%] w-[100%] md:text-sm 2xl:text-base text-[#8D8D8D] pt-4 ">
                
                {`${account_details?.officialName}`}
              </div>
              <div className=" h-[20%] w-[100%] sm:text-base md:text-sm 2xl:text-base text-[#8D8D8D] pt-5 mt-4 ">

Credit Available 
</div>
            </div>

            <div className="h-[50%] w-[100%] items-center space-y-1">
              <div className=" h-[45%] w-[100%] text-4xl p-y-2 text-[#FF9F2D] font-[400]">{`${account?.available} ${account?.iso_currency_code}`}</div>
              <div className=" h-[10%%] w-[20%] text-sm p-2 pl-3.5 text-blue-400 border rounded md:text-xs 2xl:text-sm hover:text-blue-400 border-blue-400 cursor-pointer">
                All Apps
              </div>
            </div>
          </div>
        </div>
        {/* flex div */}
        <div className="flex space-x-5 h-[36%] max-h-[36%] overflow-y-hidden ">
          {/* worflows */}

          <div className="bg-[#111111] h-[100%] w-[55%] p-5 rounded">
            <div className=" h-[10%] w-[100%] text-start text-white ">
              Workflows
            </div>

            <div className="flex h-[90%]  ">
              <div className="h-full w-[50%]">
                
                <div className="mb-3">

                <div className="text-3xl font-bold text-white mt-2">26</div>
                <div className='md:text-xs 2xl:text-sm text-slate-500'>Active Workflows</div>
                </div>
                
                <div className='md:text-sm  2xl:text-base font-[400]    text-[#8D8D8D]'>
                    <div>Onboarding</div>
                    <div>Vendor Risk Assesment</div>
                    <div>Vendor Renewal</div>
                    <div>Attestation Report</div>
                </div>

              </div>
              
              
              <div className=" w-[50%]">

              <div className="mb-3">

<div className="text-3xl font-bold text-white mt-2">8</div>
<div className='md:text-xs 2xl:text-sm text-slate-500'>Drafts Workflows</div>
</div>

<div className='md:text-sm text-[#8D8D8D] 2xl:text-base'>
    <div>Onboarding</div>
    <div>Vendor Risk Assesment</div>
    <div className='mt-3 text-white cursor-pointer'>See All</div>

</div>
              
              
              
              </div>
            
            
            
            </div>
          </div>
          {/* mytasks */}
          <div className="bg-[#111111] h-[100%] w-[45%] p-5 rounded">
          

{/* header of myTasks */}
          <div className="flex h-[10%]">
          <div className=" text-white w-[90%]">MyTasks</div><div className="w-[10%] text-sm text-white cursor-pointer">See All</div>
          </div>

{/* ciruclar progress bars */}
          <div className=" h-[90%]">

                <div className=" h-[50%] ">

                <div className="flex h-full">
                <div className=" p-2 flex-[20%]">
                <CircularProgress variant="determinate" value={80} size={70} />

                </div>

                <div className=" space-y-1 flex-[80%] items-center pl-3">

                <div className='text-base text-white'>Oboarding Salsabilla Hampton</div>
                <div className="text-sm text-[#8D8D8D] pl-1">Provision access for Basecamps</div>
                <div className="text-sm  text-[#8D8D8D] pl-1">Provision access for Zeplin</div>

                </div>
             </div>


            </div>





<div className=" h-[50%] ">
<div className="flex h-full">


<div className=" p-2 flex-[20%]">
                <CircularProgress variant="determinate" value={35} size={70} />

                </div>
                <div className=" space-y-1 flex-[80%] items-center p-3">

                <div className='text-base text-white'>Oboarding Salsabilla Hampton</div>
                <div className="text-sm text-[#8D8D8D] pl-1">Provision access for Basecamps</div>
                <div className="text-sm  text-[#8D8D8D] pl-1">Provision access for Zeplin</div>

                </div>
             </div>

</div>

          </div>


          
          
          </div>
        </div>
        {/* flex div */}
      </div>
    </div>
    </>
  );
}

export default Dashboard;
