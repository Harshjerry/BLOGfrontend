import {createContext, useReducer,useEffect} from "react";
import Reducer from "./reducer.js";

const initialStage = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false
};


export const Context= createContext(initialStage);

export const ContextProvider= ({children})=>{
const [state,dispatch]=useReducer(Reducer,initialStage);

useEffect(()=>{
  localStorage.setItem("user",JSON.stringify(state.user));
},[state.user]);



return <Context.Provider   value={
  {
    user:state.user,
    isFetching:state.isFetching,
    error:state.error,
    dispatch
  }
}>
{children}
 </Context.Provider>
}
