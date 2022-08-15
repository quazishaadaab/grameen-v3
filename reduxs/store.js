import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux'
import userReducer from "./userSlice.js"
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import thunk from 'redux-thunk'
import {payload} from "../pages/Dashboard/[dashboard]"

 
const persistConfig={

    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)
 export const store= configureStore({

reducer: persistedReducer,
devTools: process.env.NODE_ENV !== 'production',
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    // reducer:{


    //     user: userReducer,

    // }
})


    export const mainReducer = async(state = {  
   
        balance : 0 ,
        expenses : 0,
        credit : 0,
        account_number : 0,
        }, action) => {

            
        //    if(action.type==='user/login'){
  
            return{
                
                balance:await payload?.balance,
                expenses:await payload?.expenses,
                credit:await payload?.credit,
                account_number:await payload?.account_number,

            }
        // }
        };


export const store_two = configureStore({reducer: mainReducer});
