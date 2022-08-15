import TimeAgo from "react-timeago"
import React, { useEffect, useState } from "react"

import { ArrowDownIcon, BookmarkIcon, ChatAlt2Icon, ChatAltIcon, DotsHorizontalIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline"
import Avatar from "./Avatar"
import { ArrowUpIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { Jelly } from "@uiball/loaders"
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"
import { GET_ALL_VOTES_BY_POST_ID } from "../graphql/queries"
import { useMutation, useQuery } from "@apollo/client"
import { ADD_VOTE } from "../graphql/mutations"

type Props={    
post : Post
}

function Post({post}:Props){
    // could also put this in the [post_Id].tsx page

const {data:session} = useSession()

const [vote,setVote] =useState<boolean>()

const upVote = async (isUpvote:boolean)=>{
    if(!session){
        toast("!You'll need to sing in to vote ")
        return 
    }

    // if you already voted true/up and your upvoting, no point because you already voted up
    if (vote && isUpvote) return
    // if you already voted false and your trying to vote false again, than you shouldnt be allowed
    if(vote=== false && !isUpvote) return 

    console.log('voting...',isUpvote)
    await addVote({
        variables:{
            post_id:post.id,
            username:session.user?.name,
            upvote:isUpvote,
        }

    })

}


const {data,loading} = useQuery(GET_ALL_VOTES_BY_POST_ID, {
variables:{
    post_id:post?.id,
}
})

const [addVote]= useMutation(ADD_VOTE,{
    refetchQueries:[GET_ALL_VOTES_BY_POST_ID, 'getVotesByPostId'],
})

useEffect(() => {
  const votes: Vote[] =data?.getVotesByPostId
  const vote = votes?.find(vote=> vote.username==session?.user?.name
  )?.upvote

setVote(vote)

}, [data])







    if(!post){
        return (
            <div className="flex w-full items-center justify-center p-10 text-xl">
             <Jelly size={50} color="#FF4501"/>
            </div>
        )
    }

const displayVotes=(data:any)=>{
const votes : Vote[] = data?.getVotesByPostId
const displayNumber= votes?.reduce(
(total,vote)=>(vote.upvote?(total+=1):(total-=1)),0
 )

if (votes?.length===0) return 0;
if(displayNumber===0){return votes[0]?.upvote?1:-1}

return displayNumber;
}



    return (
    
<Link href={`/post/${post?.id}`}>
<div className="rounded-xl gap-3 mt-1 flex cursor-pointer border border-gray-800 bg-black shadow-sm ">




{/* Votes */}
<div className="bg-[#292928] rounded-xl flex flex-col pt-8 pb-9 items-center justify-start space-y-1  p-4 text-gray-400">

<ArrowUpIcon onClick={()=>upVote(true)} className={`voteButtons hover:text-red-400 ${vote && 'text-red-400'}`}/>
<p className="text-xs font-bold text-white">{displayVotes(data)}</p>
<ArrowDownIcon onClick={()=>upVote(false)} className={`voteButtons hover:text-blue-400 ${vote===false && 'text-blue-400'}`}/>

</div>


<div className="p-3 pb-1">

    {/* Header */}
<div className="flex items-center space-x-2">
    
<Avatar seed={post.subreddit[0]?.topic}/>
<p className="text-xs text-gray-400">
<Link href={`/subreddit/${post.subreddit[0]?.topic}`}>

<span className="font-bold text-white hover:text-green-400 hover:underline">
    g/{post.subreddit[0]?.topic}
    </span>
     
</Link>
{'  '} Posted by @{post.username} <TimeAgo date={post.created_at}/>
</p>

</div>
{/* Body */}

<div className="pl-2 ">
<h2 className="text-xl font-semibold text-white">{post.title}</h2>
<p className="mt-2 text-sm font-light text-white">{post.body}</p>
</div>
{/* Image */}
<img src={post.image} alt="" className="w-full" />
{/* Footer */}
<div className="flex space-x-4 text-gray-400">

<div className="postButtons">
<ChatAltIcon className="h-6 w-6"/>
<p className="">{post.comments.length} Comments</p>
</div>

<div className="postButtons">
<GiftIcon className="h-6 w-6"/>
<p className="hidden sm:inline"> Award</p>
</div>

<div className="postButtons">
<ShareIcon className="h-6 w-6"/>
<p className="hidden sm:inline">Share</p>
</div>

<div className="postButtons">
<BookmarkIcon className="h-6 w-6"/>
<p className="hidden sm:inline">Save</p>
</div>

<div className="postButtons">
<DotsHorizontalIcon className="h-6 w-6"/>
</div>




</div>


</div>



</div>
</Link>
    )

}

export default Post