import React from 'react';
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const Root = ({children, ...props}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer {...props }/>
    </>
  );
};

export default Root;
