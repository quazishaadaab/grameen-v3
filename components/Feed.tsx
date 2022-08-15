import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";


type Props={
topic?: string

}

function Feed( {topic}:Props) {

let data = null ;

if(topic){
  const { data :topicData, error } = useQuery(GET_ALL_POSTS_BY_TOPIC, {
variables: {topic:topic}
  });

  data =topicData ;
}else{
  const { data :topicData, error } = useQuery(GET_ALL_POSTS) 
  data =topicData ;

}



  //if topic doesnt exist, show all posts. if topic exists, show the posts with that topic only
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic; // the response that is returned is a json with getPostList as the title/header/object name
  //we specify the type Post[] in typings.d.ts

  return (
    <div>
      {posts?.map((r) => (
        <Post key={r.id} post={r} />
      ))}
    </div>
  );
}

export default Feed;
