// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     uri: "https://fengkou.stepzen.net/api/dozing-fly/__graphql",
//     headers:{
// Authorization:`Apikey fengkou::stepzen.net+1000::f673c7382fd6567db74ecf62b91fb680b3ac8d17979f1d7433c5ad38a990af77`,

//     },
//     // cache: new InMemoryCache(),
// });

export const client = new ApolloClient({
    headers: {
      Authorization: `Apikey fengkou::stepzen.net+1000::f673c7382fd6567db74ecf62b91fb680b3ac8d17979f1d7433c5ad38a990af77`,
      "Content-Type" : "application/json"
    },
    uri:"https://fengkou.stepzen.net/api/dozing-fly/__graphql",
        cache: new InMemoryCache(),
  })