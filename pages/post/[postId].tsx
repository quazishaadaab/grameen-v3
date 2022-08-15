import { useMutation, useQuery } from '@apollo/client'
import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Timeago from 'react-timeago'
import Avatar from '../../components/Avatar'
import Post from '../../components/Post'
import { ADD_COMMENT } from '../../graphql/mutations'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'


type FormData= {
  comment:string
}


 function PostPage() {

    const router=useRouter()
    
    // we need to load for the data to retrive( async function)

const {data:session} = useSession()


        const {data}=useQuery(GET_POST_BY_POST_ID,{
            variables:{
            post_id : router.query.postId
            }
            })
            
            
const [addComment]=useMutation(ADD_COMMENT,{refetchQueries:[{query:GET_POST_BY_POST_ID}]})

    const post:Post = data?.getPostListByPostId

const {register,handleSubmit,watch, setValue, formState:{errors},} = useForm<FormData>()

const submitForm=handleSubmit(async(formData)=>{
console.log(formData)

const notification = toast.loading('Posting your comment..')
await addComment({
variables:{
  post_id:router.query?.postId,
  username: session?.user?.name,
  text:formData?.comment,
}

})
setValue('comment','')
toast.success('comment posted',{
id:notification,}) 


})
  return (

// Display the post only 
<div className='mx-auto my-7 max-w-5xl'>
<Post post={post}/> 

{/* Comment Section */}
<div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
<p className="text-sm">
    Comment as <span className="text-red-500">{session?.user?.name}</span>
</p>

<form onSubmit={submitForm} className='flex flex-col space-y-2'>
<textarea //textarea gives a very big textbox that we can input data
disabled={!session}
{...register('comment')}
className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
placeholder={session?'Have something to say?':" Please sign in to comment"}
/>
<button type='submit' className='rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200'>
Comment
</button>

</form>
</div>


<div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
  <hr className="py-2"></hr>


  {

    // you need to use the arrow function with open circular brackets,(), not {}. I dont know why,
    // 
    post?.comments?.map(r=>(



<div className="relative flex items-center space-x-2 space-y-5" key={r.id}> 

<hr className="absolte top-10 left-7 z-0 h-16 border"></hr> 

<div className="z-50">
  <Avatar seed={r.username}/>
</div>

<div className="flex flex-col">
<p className="py-2 text-xs text-gray-400">
<span className="font-semibold text-gray-600">
{r.username}
</span>

<Timeago date={r.created_at}/>
</p>
<p>{r.text}</p>
</div>

 </div>
    )
    
    
    )}


</div>


</div>
  )
}

export default PostPage