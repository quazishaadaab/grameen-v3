import { useMutation } from "@apollo/client";
import { LinkIcon, PhotographIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {client} from "../apollo-client";
import { ADD_POST, ADD_SUBREDDIT } from "../graphql/mutations";
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from "../graphql/queries";
import Avatar from "./Avatar";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

type Props={
  subreddit?:string
}

// used react hook form
function PostBox({subreddit} : Props) {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  //  adds a post to the db
  const [addPost] = useMutation(ADD_POST,{
refetchQueries:[GET_ALL_POSTS, 'getPostList']}); //this is a refetch call so when the addPost mutation is 
// called when submit button is clicked,it calls the getPostList again.


  const [addSubreddit] = useMutation(ADD_SUBREDDIT);

  //  used react hook form
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();



  const onSubmit = handleSubmit(async (formData) => {
    // handleSubmit is a react-form hook that updates/sets the state
    // of the new form that is inputted .

    console.log(formData);
const notification=toast.loading('creating new toast')
    try {

      // we store the query result in data but we want to change its name so we use : getSubredditListByTopic as the new reference.
      const {
        data: { getSubredditListByTopic },
      } = await client.query({
        query: GET_SUBREDDIT_BY_TOPIC,
        // the variables are the new inputs we collect from the form and insert to the query.
        variables: {
          topic:  subreddit || formData.subreddit, //pass either the formdata input or the subreddit prop if the page in a subreddit page.
        }, //we pass the formData state as topic
      });
  
console.log(getSubredditListByTopic)
      // we need to check if subreddit exists first, if it doesnt we create it , if it does we return it
      // getSubredditListByTopic here is referring to the const {data:getSubredditListByTopic} so we are referring the the data result after the query
      
      
      const subredditExists =  getSubredditListByTopic.length > 0; //check if there is one if length is greater than 0

      if (!subredditExists) {
        // create subreddit
        console.log("subreddit is new");

        const {
          data: { insertSubreddit: newSubreddit },
        } = await addSubreddit({
          variables: {
            topic: formData.subreddit,
          },
        });

        console.log("creating post", formData);
        const image = formData.postImage || "";

        // rename to newPost
        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: newSubreddit.id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });

        console.log("newpost added", newPost);
      } else {
        //use existing subreddit
        // if subreddit exists :

        console.log(`uusing existing subreddit`);
        console.log(getSubredditListByTopic);

        //the user inputted image
        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost }, //we want to get the retured result of the query 
        } = await addPost({ //we insert the new data into the addPost function/mutation
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: getSubredditListByTopic[0].id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });
      }

      // after the conditional statements have been executed, we want to reset all the values
      setValue('postBody','')
      setValue('postImage','')
      setValue('postTitle','')
      setValue('subreddit','')

      toast.success('new post created',{
id:notification

      })

    } catch (e) {
      toast.error('something went wrong',{
        id:notification
      })
    }


  });

  return (
    <form
      onSubmit={onSubmit}
      className=" top-20 z-50 rounded-md border border-gray-600 bg-black p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar />

        {/* avatar */}
        <input
          //registered the postTitle field(this input tags fills the postTitle)
          // this is required
          {...register("postTitle", { required: true })}
          // disabled is a boolean so it disables if true. if no session, than disabled true

          disabled={!session}
          type="text"
          className="flex-1 rounded-md bg-[#1C1C1C] text-white p-2  rounded pl-5 outline-none"
          placeholder={
            session ? subreddit? `Create a post in r/${subreddit}`: "Create a post by entering a title" : "Sign in to post"
          //if subreddit exists due it it coming from the prop(if page is a subreddit page), than dont display title or sign in
          }
        />

        {/* the onclick under photographicon will turn on or off the blue tint when clicked. so if already blue, another click will make it white */}
        <PhotographIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 cursor-pointer text-gray-300 ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className="h-6 cursor-pointer text-gray-300" />
      </div>
      {/* Body */}

      {/* the watch field basically watches for changed in the title ( body). If a user enters a character,
then the subreddit and imageurl fields will appear. otherwise(no characters typed in the body field) the subreddit and 
image url fields will not show/appear. therefore, it watches for changes.
*/}

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px] text-white">Body:</p>
            <input
              type="text"
              className="m-2 flex-1 bg-[#1C1C1C] text-white p-2 rounded outline-none"
              {...register("postBody")}
              placeholder="text(optional)"
            />
          </div>

{

!subreddit && (
  // insert subreddit
    <div className="flex items-center px-2">
    <p className="min-w-[90px] text-white">Subreddit</p>
    <input
      type="text"
      className="m-2 flex-1 bg-[#1C1C1C] text-white rounded p-2 outline-none"
      {...register("subreddit")}
      placeholder="i.e Scarborough SouthWest"
    />
  </div>
)


}

        
          {/* Insert image */}

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px] text-white">Image URL</p>
              <input
                type="text"
                className="m-2 flex-1 bg-blue-50 p-2 bg-[#1C1C1C] rounded text-white outline-none"
                {...register('postImage')}
                placeholder="optional"
              />
            </div>
          )}

          {/* Errors */}
          {Object.keys(errors).length>0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === 'required' && (
                <p>- A Post Title is required</p>
              )}

              {errors.subreddit?.type === 'required' && (
                <p>- A Subreddit is required</p>
              )}
            </div>
          )}

          {/* Button*/}
          {/* since this is inside a form tag, specifying type=submit will trigger the submit call in forms. */}
          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}

      {/*   add errors */}
    </form>
  );
}

export default PostBox;
