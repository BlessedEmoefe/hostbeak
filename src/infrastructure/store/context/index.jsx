/**
 * Author: George Favour
 * Date: 12th, August 2020
 * Application context
 * */

import { createContext } from 'react';

const AppContext = createContext({
  user: {},
  app: {
    smallDrawer: process.browser
      ? JSON.parse(sessionStorage.getItem("ES-smallDrawer"))
      : true,
    noDrawer: process.browser
      ? JSON.parse(sessionStorage.getItem("ES-noDrawer"))
      : false
  }
});

export default AppContext;