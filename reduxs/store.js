import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

 
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
                
                balance:0,
                expenses:0,
                credit:0,
                account_number: 0,

            }
        // }
        };


export const store_two = configureStore({reducer: mainReducer});
