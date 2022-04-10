import React,
{
  useState,
  // useRef, useEffect,
  // useContext
}
  from "react";
import { LayoutMain } from "./styles";
// import Header from "../../Header";
import {ModalDrawer,Drawer} from "../../Drawer";
// import AppContext from "../../../infrastructure/store/context";
// import {
//   TOGGLE_NO_DRAWER,
//   TOGGLE_SMALL_DRAWER,
// } from "../../../infrastructure/store/types/user";
import Header from "../../header/header.component";
// import Header from "../../More/Header/index";


const GeneralLayout = ({ children }) => {
  /*
 * The context of the drawer is persisted from the global store,
 * hence the deprecation of the local states which were handling
 * that function before.
 *
 * Dispatch() call will internally handle the drawer modes
 * */

// const handleNoDrawer = () => dispatch({type: TOGGLE_NO_DRAWER})
// const handleSmallDrawer = () => dispatch({type: TOGGLE_SMALL_DRAWER})

  // const { app, dispatch } = useContext(AppContext);

  const [smallDrawer, setSmallDrawer] = useState(true)
   const [noDrawer, setNoDrawer] = useState(true);
  
  const handleNoDrawer = () => {
      setNoDrawer(!noDrawer)
    }
  const handleSmallDrawer = () => {
      setSmallDrawer(!smallDrawer)
    }
  return (
    <div>
      <Header
        smallDrawer={smallDrawer}
        handleNoDrawer={handleNoDrawer}
      />
      <Drawer
        handleSmallDrawer={handleSmallDrawer}
        smallDrawer={smallDrawer}
        noDrawer={noDrawer}
        handleNoDrawer={handleNoDrawer}
      />
      <ModalDrawer
        handlesmallDrawer={handleSmallDrawer}
        smallDrawer={smallDrawer}
        noDrawer={noDrawer}
        handleNoDrawer={handleNoDrawer}
      />
      <LayoutMain smallDrawer={smallDrawer}>{children}</LayoutMain>
    </div>
  );
};

export default GeneralLayout;
