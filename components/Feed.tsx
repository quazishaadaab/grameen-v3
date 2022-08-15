import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";


type Props={
topic?: string

}

function Feed( {topic}:Props) {


let topic_boolean = false ;

topic? (topic_boolean = true ) :( topic_boolean = false ) ;


  const { data:speceficData   } = useQuery(GET_ALL_POSTS_BY_TOPIC, {
skip:!topic_boolean,
variables: {topic:topic}
  } )

  const { data:normalData  } = useQuery(GET_ALL_POSTS, {
    skip:topic_boolean
  }) 





  //if topic doesnt exist, show all posts. if topic exists, show the posts with that topic only
  const posts: Post[] = !topic ? normalData?.getPostList : speceficData?.getPostListByTopic; // the response that is returned is a json with getPostList as the title/header/object name
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
