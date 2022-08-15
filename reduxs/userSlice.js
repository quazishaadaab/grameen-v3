import {createSlice} from "@reduxjs/toolkit"
import {useSelector} from "react-redux"


 export const userSlice = createSlice({
    name:'user',


    initialState:{
        balance:0,
        expenses:0,
        credit:0,
        account_number:0,

    },
    reducers:{

setFinancialData: (state,action)=>{

state.user = action.payload;
},
logout:(state)=>{
state.user=null;
},

},
 });


 export const  {setFinancialData,logout} = userSlice.actions;

 export default userSlice.reducer