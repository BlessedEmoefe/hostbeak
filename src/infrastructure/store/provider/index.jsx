/**
 * Author: George Favour
 * Date: 12th, August 2020
 * Application provider
 * */

import React, {useContext, useEffect, useReducer} from "react";
import AppContext from "../context";
import {userReducer} from "../reducer/userReducer";
import {SET_CURRENT_USER} from "../types/user";

const Provider = ({children, ...props}) => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(userReducer, initialState);

  console.log(props, 'props')

  useEffect(() => {
    if (props) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: props
      })
    }
  }, []);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;