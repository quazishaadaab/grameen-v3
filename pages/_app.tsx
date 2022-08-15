import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import { Toaster } from "react-hot-toast";
import { QuickstartProvider } from "./Dashboard/context";

import {Provider} from "react-redux"

import {store} from '../reduxs/store'

import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist"
import Test from './test'


let persistor = persistStore(store)

// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
    <Provider store={store}>
<PersistGate loading ={null} persistor={persistor}>


    <ApolloProvider client={client}>
      <SessionProvider session={session}>

        <Toaster />
        <QuickstartProvider>

        {/* makes whole app scrollable and grey */}
        <div className="h-screen w-screen overflow-y-scroll ">

          <Component {...pageProps} />

        </div>
        </QuickstartProvider>

      </SessionProvider>
    </ApolloProvider>

    </PersistGate>
      </Provider>
  );
}

export default MyApp;
